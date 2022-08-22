import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ReactiveFundamentals from '../views/ReactiveFundamentals.vue'
import ComputedProperties from '../views/ComputedProperties.vue'
import ClassAndStyleBindings from '../views/ClassAndStyleBindings.vue'
import ConditionalRendering from '../views/ConditionalRendering.vue'
import ListRendering from '../views/ListRendering.vue'
import EventHandling from '../views/EventHandling.vue'
import FormInputBindings from '../views/FormInputBindings.vue'
import LifecycleHooks from '../views/LifecycleHooks.vue'
import Watchers from '../views/Watchers.vue'
import TemplateRefs from '../views/TemplateRefs.vue'
import ComponentsBasics from '../views/ComponentsBasics.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/reactive-fundamentals",
      name: "reactive fundamentals",
      component: ReactiveFundamentals,
    },
    {
      path: "/computed-properties",
      name: "computed properties",
      component: ComputedProperties,
    },
    {
      path: "/class-and-style-bindings",
      name: "class and style bindings",
      component: ClassAndStyleBindings,
    },
    {
      path: "/conditional-rendering",
      name: "conditional rendering",
      component: ConditionalRendering,
    },
    {
      path: "/list-rendering",
      name: "list rendering",
      component: ListRendering,
    },
    {
      path: "/event-handling",
      name: "event handling",
      component: EventHandling,
    },
    {
      path: "/form-input-bindings",
      name: "Form input bindigs",
      component: FormInputBindings,
    },
    {
      path: "/lifecycle-hooks",
      name: "Lifecycle hooks",
      component: LifecycleHooks,
    },
    {
      path: "/watchers",
      name: "Watchers",
      component: Watchers,
    },
    {
      path: "/template-refs",
      name: "Template Refs",
      component: TemplateRefs,
    },
    {
      path: "/components-basics",
      name: "Components basics",
      component: ComponentsBasics,
    },
  ],
});

export default router;
