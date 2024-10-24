<template>
  <nav class="top-nav">
    <div class="nav-text-large">
      React and modern web frameworks: A comparison of performance - Vue 3
    </div>
    <ul class="nav-list">
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/posts">Posts</RouterLink>
      </li>
      <li>
        <RouterLink to="/users">Users</RouterLink>
      </li>
    </ul>
  </nav>
  <main class="container">
    <RouterView />
  </main>
</template>
