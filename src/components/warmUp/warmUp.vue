<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box{
    width: 100%;
    font-size: 15px;
  }
   .bannerBox{
      width: 100%;
   }
  .processBox,.awardBox,.ruleBox{
    padding: 0px 15px;
  }
   .textBox{
     padding: 30px 15px;
     font-size: 16px;
     text-indent: 32px;
     line-height: 36px;
   }
   .textBox p{
     text-indent:32px;
   }
   .process_contentBox{
     width: 100%;
     padding: 10px 10px;
   }
  .awardBox{
    padding-bottom: 20px;
    padding-bottom: 20px;
    line-height: 30px;
  }
   .awardBox ul li{
     font-size: 15px;
     display: flex;
     flex-flow: row wrap;
     justify-content: flex-start;
     align-items: center;
   }
   .ruleBox{
     font-size: 15px;
     line-height: 30px;
   }
  .ruleBox h3{
      font-weight: 900;
    color: #6a3906;
  }
  .ruleBox ul li{
    margin: 25px 0px;
  }
   /*公共样式部分*/
   .titleBox{
     width: 100%;
     height: 30px;
     display: flex;
     justify-content: center;
     margin-bottom: 10px;
   }
   .titleBox .titleBox_top{
     width: 100px;
     height: 30px;
     text-align: center;
     font-size: 24px;
     line-height: 30px;
     flex: 0 0 100px;
     margin-right: 5px;
   }
  .titleBox .borderBox{
    flex: 1;
    height: 30px;
    display: flex;
    align-items: center;
  }
  strong{
    font-weight: 900;
  }
  .gray{
    color: #666666;
  }
  .strong{
    font-weight:900;
  }
  .brown {
    color: #6a3906;
  }

  .red {
    color: #e60012;
  }
</style>


<template>
  <div>
    <div class="box">
      <div class="bannerBox">
        <img src="./img/ucanCup_01.jpg" alt="Banner图" width="100%" height="120px">
      </div>
      <div class="textBox">
          <p>
            2017“优看”杯超级宝贝才艺大奖赛，是贵州优看教育科技有限公司面向贵州省3-6岁儿童，以亲子为主题举办的大型幼儿才艺竞赛活动。
          </p>
          <p>
            活动通过才艺表演、智力比拼、游戏互动等全方面的展示，让宝贝和家长在欢快的竞赛过程中，增强亲子间的互动与交流，培养宝贝的自信心和主动学习英语的兴趣，提高宝贝的综合素质，使宝贝成长为一个自信、自立、自强的未来之星。
          </p>
        　
      </div>
      <div class="processBox">
        <div class="titleBox">
          <div class="titleBox_top brown">大赛流程</div>
          <div class="borderBox">
                  <img src="./img/ucanCup_04.jpg"  width="100%" height="100%">
           </div>
        </div>
        <div class="process_contentBox">
          <img src="./img/ucanCup_08.jpg" width="100%">
        </div>
      </div>

      <div class="awardBox">
        <div class="titleBox">
          <div class="titleBox_top brown">奖项设置</div>
          <div class="borderBox">
            <img src="./img/ucanCup_04.jpg"  width="100%">
          </div>
        </div>
        <ul>
          <li>
            <span class="strong gray">冠军</span>参赛家庭代表和学校共同获得：<span class="red">¥80000元</span> 奖金
          </li>
          <li>
            <span class="strong gray">亚军</span>参赛家庭代表和学校共同获得：<span class="red">¥50000元</span> 奖金
          </li>
          <li>
            <span class="strong gray">季军</span>参赛家庭代表和学校共同获得：<span class="red">¥20000元</span> 奖金
          </li>
          <li>
            <span class="strong gray">初赛：</span>进入初赛的家庭均可获得优看<span class="red">¥300元</span> 教育金
          </li>
          <li>
            <span class="strong gray">复赛：</span>进入复赛的家庭均可获得优<span class="red">¥500元</span> 教育金
          </li>
          <li>
            <span class="strong gray">决赛：</span>所有进入决赛参赛家庭均可获得优看 <span class="red"> ¥1000元</span>现金以及 <span class="red">¥800元</span>
            教育金；决赛第4-10组参赛家庭均可获得由优看提供的 <span class="red">¥3000元</span> 现金以及 <span class="red">¥800元</span>教育金
          </li>
          <li>
            <span class="strong gray">参与奖：</span>所有报名参加本次大赛的参赛家庭均可获得优看吉祥物一只
          </li>
          <li>
            <span class="strong gray">报名方式：</span>宝贝所在学校报名处报名参赛
          </li>
        </ul>
      </div>


      <div class="ruleBox">
        <div class="titleBox">
          <div class="titleBox_top brown">大赛规则</div>
          <div class="borderBox">
            <img src="./img/ucanCup_04.jpg"  width="100%">
          </div>
        </div>
        <ul>
          <li>
            <h3>预 赛</h3>
            <p>
              <strong class="brown">预赛内容：</strong>
              <span>现场展示英语儿歌、英语朗诵等才艺表演或进行看图说单词； </span>
            </p>

            <p>
              <strong class="brown">时间及地点：</strong>
              <span>2017年6月23号-6月30号预赛选拔，在宝贝就读幼儿园内进行。</span><br>
              <span>经过海选淘汰，每个学校选拔60组票数高者家庭进入初赛。</span>
            </p>

          </li>
          <li>
            <h3>初 赛</h3>
            <p>
              <strong class="brown">初赛内容：</strong>
              <span>提交一段3-10分钟小朋友英语、国学展示的视频作品（要求至少有英语自我介绍和英语绘本故事诵读、自选国学内容诵读及才艺展示三部分组成，其他题材不限）；</span>
            </p>

            <p>
              <strong class="brown">提交时间及通道：</strong>
              <span>2017年7月15号之前将视频作品上传到活动网站；</span>
            </p>

            <p>
              <strong class="brown">选拔方式：</strong>
              <span>经过评比得出5组最高得分家庭直通复赛，另外进入复赛的15个名额由投票最多的家庭获得。</span>
            </p>
          </li>

          <li>
            <h3 style="display: inline-block">复 赛</h3><span style="font-size: 12px">（因在户外进行，需收取一定的住宿费、餐费、交通费）</span>
            <p>
              <strong class="brown">复赛内容：</strong>
              <span>以英语互动、国学课堂、小小画家等内容在户外进行；</span>
            </p>

            <p>
              <strong class="brown">时间及地点：</strong>
              <span>2017年7月31号-8月17号（场外地址即时通知）；</span>
            </p>

            <p>
              <strong class="brown">选拔方式：</strong>
              <span>通过户外比赛每所学校综合素质最高的一组家庭可直接进入决赛，另外一个名额由票数最多的家庭获得。</span>
            </p>
            <p>
              <strong class="brown">活动收费：</strong>
              <span>空</span>元
            </p>
          </li>

          <li>
            <h3>决 赛</h3>
            <p>
              <strong class="brown">决赛内容：</strong>
              <span>才艺表演、英语及国学知识问答、智力游戏互动；</span>
            </p>

            <p>
              <strong class="brown">时间及地点：</strong>
              <span>半决赛时间：2017年9月2号；决赛时间：9月20号，地点为电视台演播厅；</span>
            </p>

            <p>
              <strong class="brown">选拔方式：</strong>
              <span>所有参赛学校进行才艺比拼，比拼结束后关闭所有投票通道，得票数最多的前10名获得角逐前三甲的机会；由10所学校经过下一轮的竞赛规则，选出得分最高的前三名作为冠军、亚军、季军获得者。</span>
            </p>
          </li>
        </ul>

      </div>
  </div>
  </div>
</template>


<script>
  export default {
    name: 'warmUp',
    data () {
      return {}
    },
    components: {}

  }
</script>
