<template>
  <div id="music-comment">
    <div class="music-comment">
      <div class="comItem">
        <div class="comImg">
          <img src="../../assets/image/song_1.jpg" alt="用户头像" />
        </div>
        <div class="comCont">
          <div class="comUser">
            <div class="user">{{ user.name }}：</div>
            <div class="comSpk">
              时间在腐蚀着记忆中的最后一点光亮，在黑暗里吟诵着、盼望着。
            </div>
          </div>
          <div class="comBottom">
            <div class="comTime">03:59</div>
            <div class="zan">
              <i @click="zan($event)" class="iconfont icon-zan"></i>
              <span>20</span>
            </div>
          </div>
        </div>
      </div>
      <div class="comItem">
        <div class="comImg">
          <img src="../../assets/image/song_1.jpg" alt="用户头像" />
        </div>
        <div class="comCont">
          <div class="comUser">
            <div class="user">{{ user.name }}：</div>
            <div class="comSpk">
              　语言是种冷暴力，相比于人性而言，它是看的见的，直指人心。
            </div>
          </div>
          <div class="comBottom">
            <div class="comTime">03:59</div>
            <div class="zan">
              <i @click="zan($event)" class="iconfont icon-zan"></i>
              <span>890</span>
            </div>
          </div>
        </div>
      </div>
      <div class="comItem">
        <div class="comImg">
          <img src="../../assets/image/song_1.jpg" alt="用户头像" />
        </div>
        <div class="comCont">
          <div class="comUser">
            <div class="user">{{ user.name }}：</div>
            <div class="comSpk">
              　黑夜下的影子比身体诚实的多，无论怎么躲藏，都藏不住作恶的身影。
            </div>
          </div>
          <div class="comBottom">
            <div class="comTime">03:59</div>
            <div class="zan">
              <i @click="zan($event)" class="iconfont icon-zan"></i>
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
      <div class="comItem">
        <div class="comImg">
          <img src="../../assets/image/song_1.jpg" alt="用户头像" />
        </div>
        <div class="comCont">
          <div class="comUser">
            <div class="user">{{ user.name }}：</div>
            <div class="comSpk">
              　黑夜下的影子比身体诚实的多，无论怎么躲藏，都藏不住作恶的身影。
            </div>
          </div>
          <div class="comBottom">
            <div class="comTime">03:59</div>
            <div class="zan">
              <i @click="zan($event)" class="iconfont icon-zan"></i>
             <span>222</span>
            </div>
          </div>
        </div>
      </div>
      <div class="comItem">
        <div class="comImg">
          <img src="../../assets/image/song_1.jpg" alt="用户头像" />
        </div>
        <div class="comCont">
          <div class="comUser">
            <div class="user">{{ user.name }}：</div>
            <div class="comSpk">
              　黑夜下的影子比身体诚实的多，无论怎么躲藏，都藏不住作恶的身影。
            </div>
          </div>
          <div class="comBottom">
            <div class="comTime">03:59</div>
            <div class="zan">
              <i @click="zan($event)" class="iconfont icon-zan"></i>
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page">
      <page />
    </div>
  </div>
</template>

<script>
import page from "../page";

export default {
  data() {
    return {
      user: { name: "管理员" },
    };
  },
  methods: {
    zan(e) {
      const i = e.target;
      const zanVal = +(i.nextSibling.childNodes[0].nodeValue)++;
    },
  },
  components: {
    page,
  },
};
</script>

<style lang="scss">
@import "@/assets/css/music/comment.scss";
@import url("//at.alicdn.com/t/font_2042834_6dlig7w1pbh.css");
</style>