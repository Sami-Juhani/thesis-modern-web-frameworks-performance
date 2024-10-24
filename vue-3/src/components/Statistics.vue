<template>
  <div>
    <h3 class="mb-2">{{ title }}</h3>
    <ul class="stats-list">
      <li>
        Posts: <span>{{ posts }}</span>
      </li>
      <li>
        Comments: <span>{{ comments }}</span>
      </li>
      <li>
        Users: <span>{{ users }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StatisticsCard',
  props: {
    title: {
      type: String,
      required: true
    },
    posts: {
      type: Number,
      required: true
    },
    comments: {
      type: Number,
      required: true
    },
    users: {
      type: Number,
      required: true
    }
  }
}
</script>
