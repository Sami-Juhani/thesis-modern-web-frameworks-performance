<template>
  <div class="card">
    <div class="card-body">
      <div class="text-sm mb-1">{{ comment.email }}</div>
      {{ comment.body }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentCard',
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>