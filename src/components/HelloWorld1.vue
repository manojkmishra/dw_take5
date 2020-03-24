<template>
  <div class="hello">
    <h1>Academind </h1>
    <input style="display:none" type="file" @change="onselect" ref="fileinp">
    <button @click="$refs.fileinp.click()">Pick File</button>
    <button @click="onupload">Upload</button>
  </div>
</template>
<script>
import axios from 'axios'
export default 
{
  data(){return{ selectedFiles:null}},
  methods:{ onselect(e)
              { console.log('e=',e);
                this.selectedFiles=e.target.files[0];
              },
              onupload(){
                const fd=new FormData();
                fd.append('image',this.selectedFiles,this.selectedFiles.name)
                console.log('formdata=',fd);
                //axios.post('{onUploadProgress:}'); //8 min
              }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
