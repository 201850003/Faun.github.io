<template>
  <div id="header">
    <h3>Faun的个人主页</h3>
  </div>
  <div id="content">
    <div id="innerBody">
      <p id="centerText">座右铭</p>
      <hr>
      <p>吾日七省吾身: </p>
      <ol>
        <li>吾今得之乎?</li>
        <li>吾为人之行何如？</li>
        <li>吾心竞于邪？</li>
        <li>吾开心乎？</li>
        <li>而朕忽乎？</li>
        <li>余麻醉而自逢乎？</li>
        <li>余尚记吾初心邪？</li>
      </ol>
    </div>
  </div>
  <div id="footer">
    <p>创建日期: 2022/9/21</p>
  </div>

</template>

<script>

export default {
  name: "FaunHome"

}
</script>

<style>
  body {
    background-image: url("../assets/pic/star1.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
  }

  h3 {
    text-align: center;
  }

  #footer {
    background-color: darkkhaki;
    text-align: center;
  }

  #content {
    height:1000px;
    width:60%;
    background-color: snow;
    margin-left: auto;
    margin-right: auto;
  }

  #header {
    background-color: darkkhaki
  }

  #innerBody {
    background-color: antiquewhite;
    width: 100%;
    height: 1000px;
  }

  #centerText {
    text-align: center;
  }
</style>
