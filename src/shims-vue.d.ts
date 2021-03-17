declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
  module "@vue/runtime-core" {
    interface ComponentCustomProperties {
      $Progress: any;
    }
  }
}