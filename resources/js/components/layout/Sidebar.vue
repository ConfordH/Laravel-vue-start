<template>
  <div>
    <div class="sidebar-heading">Project</div>
    <div class="list-group list-group-flush">
      <a href="javascript:void" class="list-group-item list-group-item-action bg-light">Dashboard</a>
      <a
        data-toggle="collapse"
        href="#userManagement"
        role="button"
        aria-expanded="false"
        aria-controls="userManagement"
        class="list-group-item list-group-item-action bg-light"
      >User Management</a>
      <div class="list-group list-group-flush collapse" id="userManagement">
        <a href="#" class="list-group-item list-group-item-action bg-light">
          <i class="fa fa-user mr-1" aria-hidden="true"></i>
          Profile
        </a>
        <a href="#" class="list-group-item list-group-item-action bg-light">
          <i class="fa fa-user mr-1" aria-hidden="true"></i> More
          Data
        </a>
      </div>
      <a href="#" class="list-group-item list-group-item-action bg-light">Additional Menus</a>
    </div>
    <!-- dropdowns -->

    <!-- dropdowns end -->
  </div>
</template>
<script>
export default {
  name: "Sidebar"
};
</script>

<style></style>
