module.exports = {

  presets: [

      [ "@vue/app", { useBuiltIns: "entry" } ]

  ]

}
/*
ERROR  Failed to compile with 4 errors                                             오전 11:57:54

These dependencies were not found:

* TodoFooter in ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
* TodoHeader in ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
* TodoInput in ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
* TodoList in ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&

To install them, you can run: npm install --save TodoFooter TodoHeader TodoInput TodoList

위와 같은 의존성 문제 발생원인:

This option adds direct references to the core-js module as bare imports. 
Thus core-js will be resolved relative to the file itself and needs to be accessible. 
You may need to specify core-js@2 as a top level dependency in your application
if there isn't a core-js dependency or there are multiple versions.

babel.config.js

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}*/
