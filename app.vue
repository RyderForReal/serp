<template>
  <div>
    <NuxtRouteAnnouncer/>
  </div>
  <UApp>
    <div class="h-screen bg-zinc-100">
      <NuxtPage/>
      <footer class="bottom-2 text-center absolute bottom-0 w-screen">
        <div class="flex justify-center">
          <NuxtLink to="https://rgn.one/" class="hover:underline">&copy; {{new Date().getFullYear()}}, RGN.</NuxtLink>
        </div>
      </footer>
    </div>
  </UApp>
</template>