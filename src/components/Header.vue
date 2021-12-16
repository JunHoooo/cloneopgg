<template>
  <div>
    <b-row>
      <b-col>
        <b-form-input v-model="searchFormData.keyword" />
      </b-col>
      <b-col>
        <b-button @click="onSearch">
          <b-img style="width: 30px" src="search.png"
        /></b-button>
      </b-col>
    </b-row>
    <div>
      <b-button variant="outline-secondary">S7 Silver</b-button
      ><b-button variant="outline-secondary">S8 Gold</b-button
      ><b-button variant="outline-secondary">S9 Gold</b-button
      ><b-button variant="outline-secondary">S2020 Gold</b-button
      ><b-button variant="outline-secondary">S2021 Platinum</b-button>
    </div>
    <b-row>
      <b-col>
        <div v-for="person in people" :key="person.id">
          <b-img :src="person.profileUrl" style="width: 120px"></b-img>
        </div>
      </b-col>
      <b-col>
        <b-row>
          <b-col>
            <b-form-text>{{ searchFormData.listOption.name }}</b-form-text>
          </b-col>
          <b-col>
            <b-button variant="outline-secondary">즐겨찾기</b-button>
          </b-col>
          <b-row>
            <b-col>
              <b-form-text>레더 랭킹 456,315위 (상위 9.2077%)</b-form-text>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-button variant="primary">전적갱신</b-button>
              <b-button variant="info">롤 몇 시간 했는지 궁금해?</b-button>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-text>최근 업데이트 : 하루전</b-form-text>
            </b-col>
          </b-row>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      searchFormData: {
        listOption: {},
        keyword: "",
      },
      people: [],
    };
  },
  methods: {
    onSearch: function () {
      this.$axios
        .get(
          "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
            this.searchFormData.keyword +
            "?api_key=RGAPI-69c0864c-3a97-420e-a5d7-9c736123b0b2"
        )
        .then((res) => {
          console.log(res.staus);
          console.log(res.data);
          let status = res.status;
          if (status === 200) {
            console.log(status);
            this.searchFormData.listOption = res.data;
            console.log(this.searchFormData.listOption.profileIconId);
            this.$emit("onDataId", this.searchFormData.listOption.id);
            this.$emit("onDataPuuid", this.searchFormData.listOption.puuid);
            let tmp = [];
            tmp.push({
              profileUrl:
                "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/profileicon/" +
                this.searchFormData.listOption.profileIconId +
                ".png",
            });
            this.people = tmp;
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("항상 마지막에 실행");
        });
    },
  },
};
</script>