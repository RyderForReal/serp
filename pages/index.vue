<script setup lang="ts">
import { MAX_META_DESCRIPTION, MAX_META_TITLE } from "~/lib/constants"

const state = reactive({
  name: "Example",
  logo: "https://rgn-public.s3.rgn.one/images/brand/Logo.svg",

  title: "Website Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut consectetur turpis. Suspendisse aliquet libero eget sodales auctor. Ut sem mauris accumsan.",

  url: "https://example.com",
})

function getProgressColor(
  value: number,
  max: number,
):
  | "error"
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "neutral"
  | undefined {
  if (value > max) return "error"
  const delta = (max - value) / max

  if (delta < 0.05) return "warning"
  if (delta < 0.25) return "success"
  if (delta < 0.3) return "info"
  if (delta < 0.4) return "warning"
  else return "error"
}

const titleProgressColor = computed(() =>
  getProgressColor(state.title.length, MAX_META_TITLE),
)
const descriptionProgressColor = computed(() =>
  getProgressColor(state.description.length, MAX_META_DESCRIPTION),
)
</script>

<template>
  <div>
    <div class="p-2 lg:grid grid-cols-4 min-h-screen gap-x-4">
      <UForm
        :state="state"
        class="bg-zinc-200 p-4 rounded-md prose max-w-none mb-16 mx-auto max-lg:w-1/2 lg:w-full">
        <h3 class="select-none">Settings</h3>

        <h4 class="select-none">General</h4>
        <UFormField label="Brand Name" name="name" class="mb-2">
          <UInput v-model="state.name" class="w-full" />
        </UFormField>
        <UFormField label="Logo" name="logo" class="mb-2">
          <UInput v-model="state.logo" class="w-full" />
        </UFormField>
        <UFormField label="URL" name="url" class="mb-4">
          <UInput v-model="state.url" class="w-full" />
        </UFormField>

        <h4 class="select-none">Meta</h4>
        <UFormField label="Title" name="title" class="mb-2">
          <UInput v-model="state.title" class="w-full" />
          <UProgress
            :max="MAX_META_TITLE"
            :model-value="state.title.length"
            class="mt-1"
            :color="titleProgressColor" />
        </UFormField>
        <UFormField label="Description" name="description">
          <UTextarea v-model="state.description" class="w-full" />
          <UProgress
            :max="MAX_META_DESCRIPTION"
            :model-value="state.description.length"
            class="mt-1"
            :color="descriptionProgressColor" />
        </UFormField>
      </UForm>
      <div class="self-center">
        <div
          class="shadow-md bg-white p-4 flex flex-col w-[40rem] rounded-md h-34 mx-auto">
          <div class="hover:underline hover:cursor-pointer">
            <div class="flex flex-row items-center">
              <Icon
                v-if="state.logo.length == 0"
                name="material-symbols:globe"
                class="logo mr-2 w-8 h-8 overflow-hidden rounded-full p-[2px]" />
              <img
                v-if="state.logo.length > 0"
                :src="state.logo"
                class="logo mr-2 w-8 h-8 overflow-hidden rounded-full p-[2px]" />
              <div class="flex flex-col overflow-hidden line-clamp-1">
                <h3 class="text-sm">
                  {{
                    state.name.length > 0
                      ? state.name
                      : state.url.length > 0
                        ? state.url
                        : "Name"
                  }}
                </h3>
                <span class="flex flex-row">
                  <h4 class="text-xs mr-1">
                    {{
                      state.url.length > 0 ? state.url : "https://example.com"
                    }}
                  </h4>
                  <Icon name="heroicons:ellipsis-vertical" />
                </span>
              </div>
            </div>
            <h2 class="title text-xl line-clamp-1 pb-[3px]">
              {{ state.title.length > 0 ? state.title : "Title" }}
            </h2>
          </div>
          <p class="description text-sm line-clamp-2">
            {{
              state.description.length > 0 ? state.description : "Description"
            }}
          </p>
        </div>
      </div>
    </div>
    <footer class="bottom-2 text-center absolute w-full">
      <div class="flex justify-center">
        <NuxtLink to="https://rgn.one/" class="hover:underline"
          >&copy; {{ new Date().getFullYear() }}, RGN.
        </NuxtLink>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.logo {
  background-color: rgb(241, 243, 244);
}

.title {
  color: rgb(26, 13, 171);
}

.description {
  color: rgb(71, 71, 71);
}
</style>
