<script setup lang="ts">
import { provide, reactive, ref } from "vue";
import { JsonForms, JsonFormsChangeEvent } from "@jsonforms/vue";
import { defaultStyles, mergeStyles, vanillaRenderers } from "@jsonforms/vue-vanilla";
import Ajv from "ajv";
import ajvErrors from "ajv-errors";

import schema from '@/assets/Schemas/Registration Forms/RegistrationFormBasic.json'
import uischema from '@/assets/Schemas/UiSchema/UiSchema.json'
import DSButton from "@/components/DS/Button/DSButton.vue";

const ajv = new Ajv({ allErrors: true, strict: false });
ajvErrors(ajv);

const renderers = Object.freeze([
  ...vanillaRenderers,
  // here you can add custom renderers
]);

const data = ref({
  name: "",
  address: "",
  phoneNumber: "",
  birthYear: "",
  ePost: "",
  allergies: "",
});

const state = reactive({
  errors: [],
  validationMode: "NoValidation",
  validated: false
})

const onChange = (event: JsonFormsChangeEvent) => {
  data.value = event.data;
  state.errors = event.errors;

  if (state.errors.length > 0) {
    state.validated = false;
  }
  else {
    state.validated = true;
  }
  console.log("error", state.errors)
  console.log("event", event)
};

const registerButtonOnClick = () => {
  if (state.validated) {
    console.log("aaa")
    // TODO: save registered courses in local storage or something, and send us to course overview
    return;
  }
  state.validationMode = 'ValidateAndHide';
  console.log("test");
}

// mergeStyles combines all classes from both styles definitions into one
const myStyles = mergeStyles(
  defaultStyles, {
  control: {
    description: "json-forms-description",
    input: "json-forms-input",
    textarea: "json-forms-textarea",
  }
});

// Provide styles to child components
provide('styles', myStyles);
console.log(myStyles);
</script>

<template>
  <div>
    <h1>Registration</h1>
    <div class="myform">
      <div class="error-box" v-if="state.errors.length > 0">
        <div v-for="(error, idx) in state.errors" :key="idx">{{ error.message }}</div>
      </div>
      <JsonForms :ajv="ajv" :data="data" :renderers="renderers" :schema="schema" :uischema="uischema"
        :validationMode="state.validationMode" @change="onChange" />
    </div>
  </div>
  <DSButton @click="registerButtonOnClick">Registrer</DSButton>
</template>

<style scoped lang="scss">
.mylabel {
  color: darkslategrey;
}

.vertical-layout {
  margin-left: 10px;
  margin-right: 10px;
}

.myform {
  width: 640px;
  margin: 0 auto;
}

.text-area {
  min-height: 80px;
}

.error-box {
  margin: 20px;
  padding: 10px;
  // color: red;
  background-color: rgba(255, 0, 0, .1);
  border: 1px solid rgba(255, 0, 0, .3);
  border-radius: var(--radius-large);
}
</style>
