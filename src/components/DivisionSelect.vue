<template>
  <div class="select-box">
    <span class="select-label">Select Division:</span>
    <select :value="modelValue" @input="$emit('update:modelValue',$event.target.value)">
      <option value="afcnorth">AFC North</option>
      <option value="afcsouth">AFC South</option>
      <option value="afceast">AFC East</option>
      <option value="afcwest">AFC West</option>
      <option value="nfcnorth">NFC North</option>
      <option value="nfcsouth">NFC South</option>
      <option value="nfceast">NFC East</option>
      <option value="nfcwest">NFC West</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'DivisionSelect',
  props: {
    modelValue: String,
  },
}
</script>

<style>
.select-box {
  margin: 0 0 2%;
}

.select-label {
  padding-right: 10px;
  font-size: 1.2em;
  font-weight: bold;
}

select {
  font-size: 1.1em;
  border-radius: 4px;
  border: 1px solid;
}
</style>
