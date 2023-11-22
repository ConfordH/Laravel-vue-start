<template>
    <div class="d-flex" id="wrapper">
        <div class="bg-light border-right" id="sidebar-wrapper">
            <Sidebar />
        </div>
        <div id="page-content-wrapper">
            <Topbar />
            <div class="container-fluid p-2">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "../layout/Sidebar.vue";
import Topbar from "../layout/Topbar.vue";
export default {
    name: "Default",
    components: {
        Sidebar,
        Topbar
    },
    mounted() {
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    }
};
</script>
