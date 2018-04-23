<template>
  <div id='pageheader'>
    <div id='divLogo'>
        <img id='pageheaderlogo' src="./../../assets/puppyheaderlogo.svg">
    </div>
    <div id='divNav'>
        <ul>
            <li>
                <a herf="">Puppy Cube</a>
                <ul>
                    <router-link to="/puppycubes">
                    <li>
                        <a herf="">Puppy Cube S</a>
                    </li>    
                    </router-link>
                    <router-link to="/puppycube">
                    <li>
                        <a herf="">Puppy Cube</a>
                    </li>    
                    </router-link>
                </ul>
            </li>
            <li>
                <a herf="">AI机器人</a>
                <ul>
                 <router-link to="/puppyrobot">
                    <li>
                        <a herf="">家用机器人</a>
                    </li>    
                </router-link>
                <router-link to="/puppycubes">
                    <li>
                        <a herf="">送货机器人</a>
                    </li>    
                </router-link>
                </ul>    
            </li>
            <li>
                <a herf="">哈奇智能</a>
                <ul>
                    <router-link to="/puppycubes">
                    <li>
                        <a herf="">智能家居</a>
                    </li>  
                    </router-link>
                    <router-link to="/puppycube">
                    <li>
                        <a herf="">解决方案</a>
                    </li>    
                    </router-link>
                     <router-link to="/puppycube">
                    <li>
                        <a herf="">成功案例</a>
                    </li>    
                    </router-link>
                     <router-link to="/puppycube">
                    <li>
                        <a herf="">关于哈奇</a>
                    </li>    
                    </router-link>
                </ul>
            </li>

            <li>
                <a herf="">AI技术方案</a>
                <ul>
                    <router-link to="/puppycubes">
                    <li>
                        <a herf="">AI交互技术</a>
                    </li>  
                    </router-link>
                    <router-link to="/puppycube">
                    <li>
                        <a herf="">机器人技术</a>
                    </li>    
                    </router-link>
                     <router-link to="/puppycubes">
                    <li>
                        <a herf="">智能视觉</a>
                    </li>    
                    </router-link>
                </ul>
            </li>
            <li><a herf="">关于Puppy</a></li>
        </ul>
        <!-- <menu :default-active="navIndex">
            <router-link to="/puppytouch"><li index="1">Puppy Touch</li></router-link>
            <router-link to="/airobot"><li index="2">AI机器人</li></router-link>
            <router-link to="/hqintell"><li index="3">哈奇智能</li></router-link>
            <router-link to="/aitech"><li index="4">AI技术方案</li></router-link>
            <router-link to="/about"><li index="5">关于Puppy</li></router-link>
        </menu> -->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    // import bus from './../../lib/bus';

    export default {
        name: 'PageHeader',
        data () {
            return {
                navIndex: 1
            }
        },

    }
</script>

<style scoped>
    #pageheader {
        background-color: gray;
        opacity: 0.8;
        width: 100%;
        height: 45px;
    }

    #divLogo {
        float: left;
        margin-left: 30px;
    }

    #pageheaderlogo {
        height: 40px;
    }

    li { 
        display: inline-block;
        cursor: pointer;
        line-height: 45px;
        padding-left: 15px;
        padding-right: 15px;
        right: 0;
        top: 0px;
        bottom: 0px;
        list-style-type: none;
        
    } 

    li:hover {
        background-color:black;
        opacity: 0.8;
    }

    ul li:hover>a{
        color: orange;
    }

    ul li {
        position: relative;
    }

    ul ul {
        position: absolute;
        top: 45px;
        margin-left: -15px;
        padding: 0px;
        text-align: left;
        display: none;
    }

    ul li:hover > ul {
        display: block;
    }

    ul ul li {
        width: 120px;
        position: relative;
        margin: 0px;
        background-color: darkgray;
        opacity: 0.9;
    }

    a {
        color: black;
    }

</style>

