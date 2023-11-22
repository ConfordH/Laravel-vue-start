<template>
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">Dashboard</div>

            <div class="card-body">The best dashboard Ever given.</div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        axios
            .get("/")
            .then(res => {
                console.log(res);
            })
            .catch(e => {
                console.log(e);
            });
    }
};
</script>
