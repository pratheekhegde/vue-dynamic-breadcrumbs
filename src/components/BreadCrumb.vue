<template>
  <div>
    {{ crumbs }}
  </div>
</template>
<script>
export default {
  computed: {
    crumbs: function() {
      let pathArray = this.$route.path.split("/")
      pathArray.shift()
      let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          path: path,
          toLink: breadcrumbArray[idx - 1]
            ? "/" + breadcrumbArray[idx - 1].path + "/" + path
            : "/" + path,
          name: this.$route.matched[idx].meta.breadCrumb || path
        });
        return breadcrumbArray;
      }, [])
      return breadcrumbs;
    }
  }
};
</script>
