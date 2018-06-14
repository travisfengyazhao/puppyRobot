
<template>
    <div id="hc-SmartHotel">
        <div class="designImg" style="background-color:#93a3ba;">
            <div class="hachi_hotel_01">
                <div class="hachi_slogan1">哈奇智慧酒店解决方案</div>
                <div class="hachi_slogan2">运用系统设备的智能互联及高新科技，让酒店服务更智能，<br/>提升酒店管理效率</div>
                <div class="hotel">
                    <div class="hotel_detail">通过客房智能化，吸引高端商务人士和年轻人，提升酒店品牌形象<br/>
                    将互联网元素融入到酒店现代化管理中，符合信息化时代下客人住宿要求<br/>
                    节能减排，降低碳排放，符合国家宏观政策<br/>
                    运用大数据学习客人消费习惯，实现精准营销带动消费，提升酒店营销效率<br/>
                    通过移动端提供更方便快捷的商品选购途径，为客人的酒店消费提供诸多便利，带来营业收入的增加<br/>
                    后续可引入更多第三方服务，获得分成收益</div>
                </div>
            </div>
          </div>
          <div class="designImg" style="background-color:#FFFFFF;">
            <img src="./../../../assets/images/hachi/hotel/div_02.jpg">
          </div>
          <div class="designImg" style="background-color:#f2f2f2;">
            <img src="./../../../assets/images/hachi/hotel/div_03.jpg">
          </div>
          <div class="designImg" style="background-color:#FFFFFF;">
            <img src="./../../../assets/images/hachi/hotel/div_04.jpg">
          </div>
    </div>
</template>

<script>
export default {
    name: 'SmartHotel'
}
</script>

<style lang="scss" scoped>
.designImg {
    text-align: center;
    width: 100%;
}

.hachi_hotel_01 {
    min-width: 1280px;
    max-width: 2580px;
    height: 1000px;
    background-image: url("./../../../assets/images/hachi/hotel/div_01.jpg");
    background-size: cover;
    display: block;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}

.hachi_slogan1 {
    width: 100%;
    text-align: center;
    font-size: 34pt;
    font-weight:lighter;
    margin-top: 180px;
}

.hachi_slogan2 {
    width: 100%;
    text-align: center;
    font-size: 20pt;
    font-weight: lighter;
    line-height: 40px;
    margin-top: 35px;
}

.hotel {
    width: 100%;
    margin-top: 391px;
}

.hotel_detail{
    margin: 0 auto;
    width: 800px;
    text-align: left;
    padding-left: 280px;
    line-height: 30px;
    color: white;
}
</style>
      