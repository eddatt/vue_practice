<template>
    <v-dialog max-width="1000px">
        <v-btn flat slot="activator" class="accent">添加日志
            <v-icon right>add</v-icon>
        </v-btn>
        <v-card>
            <v-card-title>
                <h2>添加工作日志于->{{pname}}::{{ipid}}</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="日志标题" v-model="ititle" prepend-icon="folder"></v-text-field>
                    <!-- <v-textarea label="project content" v-model="pcontent" prepend-icon="edit"></v-textarea> -->
                    <span class=""><v-icon >edit</v-icon>添加日志内容</span>
                    <v-layout>
                        <div  ref="editor" style="text-align:left;width:100%;float:left"></div>
                    </v-layout>      
                    <v-btn flat right class="warning mt-0 mt-3" @click="getContent()">测试</v-btn>

                    <v-btn flat right class="primary mt-0 mt-3" @click="submit">提交</v-btn>

                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
    
</template>

<script>
import issuedata from '@/api/issuedata'
import E from 'wangeditor'

export default { 
        name: 'editor',

    props:['ipid','pname'],
    data(){
        return{
            ititle:'',
            editorContent:'',
            due:null,
            show:false,
            inputRules:[
                v => v.length >= 3 || 'Minimum length is 3 characters'
            ],
        }
    },
    computed:{
        getIpid:function (){
                return this.ipid
            },
        getContent: function () {
            alert(this.editorContent);
            return this.editorContent
        },
    },
        methods:{
            async submit(){
            if (confirm("确认提交申请？")){
                console.log("this is IIIIIIIIIIIIIIPPPPPPPPPPPP child sid")
                console.log(this.getIpid,this.ititle,this.editorContent)
                let forrm = {
                    pid:this.getIpid,
                    title:this.ititle,
                    content:this.editorContent
                }
                console.log(forrm)
                let res = null
                //console.log("now is coming to here")
                res = await issuedata.save(forrm)
                //util.response(res, this)
                //console.log(res)
                if (res.code === 200) {
                console.log("add sucesss")
                } else {
                console.log("add faillll")
                }
            location. reload()
            this.$router.go(0)  
            }
        },
        },
    mounted() {
        var editor = new E(this.$refs.editor)
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
        }
        editor.create()
      }
}
</script>
    
    