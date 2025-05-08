<template>
    <form @submit.prevent="handleSubmit" class="row g-5">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="nameUser" class="form-label">Nombre</label>
            <input v-model="name" type="text" name="nameUser" class="form-control" id="nameUser">
        </div>
        <div class="mb-3">
            <label for="Texto" class="form-label">Texto</label>
            <input v-model="text" type="text" name="Texto" class="form-control" id="Texto">
        </div>
        
        <div class="mb-3">
            <label for="servicio" class="form-label">Servicio</label>
            <input v-model="servicio" type="text" name="servicio" class="form-control" id="servicio">
        </div>

        <div class="mb-3">
            <label for="phone" class="form-label">Telefono</label>
            <input v-model="phone" type="text" name="phone" class="form-control" id="phone">
        </div>

        <div class="col-12">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>

    </form>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useMailStore } from '../../stores/mailStore'

export default defineComponent({
    setup() {
        const email = ref('')
        const name = ref('')
        const text = ref('')
        const servicio = ref('')
        const phone = ref('')
        const mailStore = useMailStore()

        const handleSubmit = () => {
            mailStore.postMessage(email.value, name.value, text.value, servicio.value, phone.value)
        }
        return {
            email,
            name,
            text,
            servicio,
            phone,
            handleSubmit
        }
    }
})  

</script>
