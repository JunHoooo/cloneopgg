<template>
  <div>
    <b-row>
      <b-col>
        <Header @onDataId="onDataId" @onDataPuuid="onDataPuuid" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div>
          <b-tabs content-class="mt-3">
            <b-tab title="종합">
              <b-row>
                <b-col>
                  <b-row>
                    <b-col>
                      <b-card>
                        <b-row>
                          <b-col
                            ><b-img
                              style="width: 100px"
                              src="Emblem_Platinum.png"
                            >
                            </b-img
                          ></b-col>
                          <b-col>
                            <b-row>
                              <b-col>
                                <b-form-text>{{
                                  searchFormData.dataOption.queueType
                                }}</b-form-text>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                <b-form-text
                                  >{{ searchFormData.dataOption.tier }}
                                  {{
                                    searchFormData.dataOption.rank
                                  }}</b-form-text
                                >
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                <b-form-text
                                  >{{
                                    searchFormData.dataOption.leaguePoints
                                  }}LP / {{ searchFormData.dataOption.wins }}승
                                  {{
                                    searchFormData.dataOption.losses
                                  }}패</b-form-text
                                >
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                <b-form-text
                                  >{{
                                    (
                                      (searchFormData.dataOption.wins /
                                        (searchFormData.dataOption.wins +
                                          searchFormData.dataOption.losses)) *
                                      100
                                    ).toFixed(2)
                                  }}%
                                </b-form-text>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                <b-form-text
                                  >트위스티드 페이트의 전쟁광들</b-form-text
                                >
                              </b-col>
                            </b-row>
                          </b-col>
                        </b-row>
                      </b-card>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-card>
                        <b-row>
                          <b-col>
                            <b-img
                              style="width: 100px"
                              src="Emblem_Unrank.png"
                            ></b-img>
                          </b-col>
                          <b-col>
                            <b-row>
                              <b-col>
                                <b-form-text>자유 5:5 랭크</b-form-text>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col>
                                <b-form-text>Unranked</b-form-text>
                              </b-col>
                            </b-row>
                          </b-col>
                        </b-row>
                      </b-card>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <div>
                        <b-tabs>
                          <b-tab title="프리시즌 전체">
                            <b-list-group>
                              <b-list-group-item>
                                <b-row>
                                  <b-col>
                                    <b-img
                                      style="width: 50px"
                                      rounded="circle"
                                      src="https://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/Morgana.png"
                                    ></b-img>
                                  </b-col>
                                  <b-col>
                                    <b-row>
                                      <b-col>
                                        <b-form-text>모르가나</b-form-text>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col>
                                        <b-form-text>CS 21.0(0.8)</b-form-text>
                                      </b-col>
                                    </b-row>
                                  </b-col>
                                  <b-col>
                                    <b-row>
                                      <b-col>
                                        <b-form-text>2.64:1 평점</b-form-text>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col>
                                        <b-form-text>1.5/5.5/13.0</b-form-text>
                                      </b-col>
                                    </b-row>
                                  </b-col>
                                  <b-col>
                                    <b-row>
                                      <b-col>
                                        <b-form-text>50%</b-form-text>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col>
                                        <b-form-text>2 게임</b-form-text>
                                      </b-col>
                                    </b-row>
                                  </b-col>
                                </b-row>
                              </b-list-group-item>
                            </b-list-group>
                          </b-tab>
                          <b-tab title="솔로랭크"></b-tab>
                          <b-tab title="자유랭크 5v5"></b-tab>
                        </b-tabs>
                      </div>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col>
                  <b-row>
                    <b-col>
                      <div>
                        <b-tabs content-class="mt-3" fill>
                          <b-tab title="전체">
                            <b-card-group>
                              <b-card>
                                <b-row>
                                  <b-col>
                                    <b-row>
                                      <b-col>
                                        <b-form-text>20전 8승 12패</b-form-text>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col> 그래프 </b-col>
                                    </b-row>
                                  </b-col>
                                  <b-col>
                                    <b-row>
                                      <b-col>
                                        <b-form-text>2.0/5.7/11.9</b-form-text>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col>
                                        <b-form-text>2.42:1 (50%)</b-form-text>
                                      </b-col>
                                    </b-row>
                                  </b-col>
                                </b-row>
                              </b-card>
                              <b-card>
                                <b-row>
                                  <b-col>
                                    <b-row>
                                      <b-col>
                                        <b-img
                                          style="width: 40px"
                                          rounded="circle"
                                          src="https://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/Morgana.png"
                                        ></b-img>
                                      </b-col>
                                      <b-col>
                                        <b-row>
                                          <b-col
                                            ><b-form-text
                                              >모르가나</b-form-text
                                            ></b-col
                                          >
                                          <b-col
                                            ><b-form-text
                                              >57%(4승3패) 2.55평점</b-form-text
                                            ></b-col
                                          >
                                        </b-row>
                                      </b-col>
                                    </b-row>
                                  </b-col>
                                </b-row>
                                <b-row>
                                  <b-col>
                                    <b-row>
                                      <b-col>
                                        <b-img
                                          style="width: 40px"
                                          rounded="circle"
                                          src="https://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/Braum.png"
                                        ></b-img>
                                      </b-col>
                                      <b-col>
                                        <b-row>
                                          <b-col
                                            ><b-form-text
                                              >브라움</b-form-text
                                            ></b-col
                                          >
                                          <b-col
                                            ><b-form-text
                                              >60%(3승2패) 4평점</b-form-text
                                            ></b-col
                                          >
                                        </b-row>
                                      </b-col>
                                    </b-row>
                                  </b-col>
                                </b-row>
                                <b-row>
                                  <b-col>
                                    <b-row>
                                      <b-col>
                                        <b-img
                                          style="width: 40px"
                                          rounded="circle"
                                          src="https://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/Leona.png"
                                        ></b-img>
                                      </b-col>
                                      <b-col>
                                        <b-row>
                                          <b-col
                                            ><b-form-text
                                              >레오나</b-form-text
                                            ></b-col
                                          >
                                          <b-col
                                            ><b-form-text
                                              >0%(0승5패) 1.76평점</b-form-text
                                            ></b-col
                                          >
                                        </b-row>
                                      </b-col>
                                    </b-row>
                                  </b-col>
                                </b-row>
                              </b-card>
                              <b-card>
                                <b-row>
                                  <b-col>
                                    <b-row>
                                      <b-col>
                                        <b-form-text
                                          >선호 포지션 (랭크)
                                        </b-form-text>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col> 아이콘 </b-col>
                                      <b-col>
                                        <b-row>
                                          <b-col>
                                            <b-form-text>서포터</b-form-text>
                                          </b-col>
                                        </b-row>
                                        <b-row>
                                          <b-col>
                                            <b-form-text
                                              >100% 승률42%</b-form-text
                                            >
                                          </b-col>
                                        </b-row>
                                      </b-col>
                                    </b-row>
                                  </b-col>
                                </b-row>
                              </b-card>
                            </b-card-group>
                          </b-tab>
                          <b-tab title="솔로랭크"></b-tab>
                          <b-tab title="자유랭크"></b-tab>
                          <b-tab title="큐 타입"></b-tab>
                        </b-tabs>
                      </div>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-list-group v-for="(item, index) in array" :key="index">
                        <b-list-group-item>
                          <b-row>
                            <b-col>
                              <b-row>
                                <b-col>
                                  <b-dropdown
                                    variant="success"
                                    @toggle="onClick(item.matchId)"
                                  >
                                    <b-dropdown-form
                                      style="
                                        min-width: 80rem;
                                        background-color: #d8e4ec;
                                      "
                                    >
                                      <table style="width: 100%">
                                        <thead>
                                          <tr>
                                            <th>승리</th>
                                            <th>티어</th>
                                            <th>KDA</th>
                                            <th>피해량</th>
                                            <th>와드</th>
                                            <th>CS</th>
                                            <th>아이템</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr
                                            v-for="(
                                              tmp, index
                                            ) in searchFormData.dataDetailMatchWin"
                                            :key="index"
                                          >
                                            <td>
                                              <b-row>
                                                <b-col>
                                                  <b-img
                                                    style="width: 40px"
                                                    rounded="circle"
                                                    :src="tmp.picture"
                                                  ></b-img>
                                                </b-col>
                                                <b-col>
                                                  <div>
                                                    <b-img
                                                      style="width: 25px"
                                                      rounded
                                                      alt="Rounded image"
                                                      :src="tmp.spellImg"
                                                    ></b-img>
                                                  </div>
                                                  <div>
                                                    <b-img
                                                      style="width: 25px"
                                                      rounde
                                                      alt="Rounded image"
                                                      :src="tmp.spellImg2"
                                                    ></b-img>
                                                  </div>
                                                </b-col>
                                                <b-col>
                                                  {{ tmp.summonerName }}
                                                </b-col>
                                              </b-row>
                                            </td>
                                            <td>
                                              {{ tmp.summonerTier }}
                                              {{ tmp.summonerRank }}
                                            </td>
                                            <td>KDA</td>
                                            <td>
                                              {{
                                                tmp.totalDamageDealtToChampions
                                              }}
                                            </td>
                                            <td>
                                              <div>
                                                {{
                                                  tmp.visionWardsBoughtInGame
                                                }}
                                              </div>
                                              <div>
                                                {{ tmp.wardsPlaced }} /
                                                {{ tmp.wardsKilled }}
                                              </div>
                                            </td>
                                            <td>
                                              {{ tmp.totalMinionsKilled }}
                                            </td>
                                            <td>
                                              <div>
                                                <b-img
                                                  style="width: 25px"
                                                  rounded
                                                  alt="Rounded image"
                                                  :src="tmp.itemImg0"
                                                ></b-img>
                                                <b-img
                                                  style="width: 25px"
                                                  rounded
                                                  alt="Rounded image"
                                                  :src="tmp.itemImg1"
                                                ></b-img>
                                                <b-img
                                                  style="width: 25px"
                                                  rounded
                                                  alt="Rounded image"
                                                  :src="tmp.itemImg2"
                                                ></b-img>
                                                <b-img
                                                  style="width: 25px"
                                                  rounded
                                                  alt="Rounded image"
                                                  :src="tmp.itemImg3"
                                                ></b-img>
                                                <b-img
                                                  style="width: 25px"
                                                  rounded
                                                  alt="Rounded image"
                                                  :src="tmp.itemImg4"
                                                ></b-img>
                                                <b-img
                                                  style="width: 25px"
                                                  rounded
                                                  alt="Rounded image"
                                                  :src="tmp.itemImg5"
                                                ></b-img>
                                                <b-img
                                                  style="width: 25px"
                                                  rounded
                                                  alt="Rounded image"
                                                  :src="tmp.itemImg6"
                                                ></b-img>
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </b-dropdown-form>
                                    <div>
                                      <b-row>
                                        <b-col>
                                          <b-row>
                                            <b-col>
                                              <b-img
                                                style="width: 20px"
                                                src="icon_baron_b.png"
                                              ></b-img
                                              >{{
                                                searchFormData.dataWinTeamInfo
                                                  .baron.kills
                                              }}
                                            </b-col>
                                            <b-col
                                              ><b-img
                                                style="width: 20px"
                                                src="icon_dragon_b.png"
                                              ></b-img
                                              >{{
                                                searchFormData.dataWinTeamInfo
                                                  .dragon.kills
                                              }}
                                            </b-col>
                                            <b-col
                                              ><b-img
                                                style="width: 20px"
                                                src="icon_tower_b.png"
                                              ></b-img
                                              >{{
                                                searchFormData.dataWinTeamInfo
                                                  .tower.kills
                                              }}</b-col
                                            >
                                          </b-row>
                                        </b-col>
                                        <b-col>
                                          <b-row>
                                            <b-col>Total Kill</b-col>
                                            <b-col>{{
                                              searchFormData.dataWinTeamInfo
                                                .champion.kills
                                            }}</b-col>
                                            <b-col></b-col>
                                            <b-col>{{
                                              searchFormData.dataloseTeamInfo
                                                .champion.kills
                                            }}</b-col>
                                          </b-row>
                                        </b-col>
                                        <b-col>
                                          <b-row>
                                            <b-col>
                                              <b-img
                                                style="width: 20px"
                                                src="icon_baron_r.png"
                                              ></b-img
                                              >{{
                                                searchFormData.dataloseTeamInfo
                                                  .baron.kills
                                              }}
                                            </b-col>
                                            <b-col
                                              ><b-img
                                                style="width: 20px"
                                                src="icon_dragon_r.png"
                                              ></b-img
                                              >{{
                                                searchFormData.dataloseTeamInfo
                                                  .dragon.kills
                                              }}
                                            </b-col>
                                            <b-col
                                              ><b-img
                                                style="width: 20px"
                                                src="icon_tower_r.png"
                                              ></b-img
                                              >{{
                                                searchFormData.dataloseTeamInfo
                                                  .tower.kills
                                              }}</b-col
                                            >
                                          </b-row>
                                        </b-col>
                                      </b-row>
                                    </div>
                                    <b-dropdown-form
                                      style="background-color: #e9e0e0"
                                    >
                                      <table style="width: 100%">
                                        <thead>
                                          <tr>
                                            <th>패배</th>
                                            <th>티어</th>
                                            <th>KDA</th>
                                            <th>피해량</th>
                                            <th>와드</th>
                                            <th>CS</th>
                                            <th>아이템</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr
                                            v-for="(
                                              tmp, index
                                            ) in searchFormData.dataDetailMatchlose"
                                            :key="index"
                                          >
                                            <td>
                                              <b-row>
                                                <b-col>
                                                  <b-img
                                                    style="width: 40px"
                                                    rounded="circle"
                                                    :src="tmp.picture"
                                                  ></b-img>
                                                </b-col>
                                                <b-col>
                                                  <div>
                                                    <b-img
                                                      style="width: 25px"
                                                      rounded
                                                      alt="Rounded image"
                                                      :src="tmp.spellImg"
                                                    ></b-img>
                                                  </div>
                                                  <div>
                                                    <b-img
                                                      style="width: 25px"
                                                      rounde
                                                      alt="Rounded image"
                                                      :src="tmp.spellImg2"
                                                    ></b-img>
                                                  </div>
                                                </b-col>
                                                <b-col>
                                                  {{ tmp.summonerName }}
                                                </b-col>
                                              </b-row>
                                            </td>
                                            <td>
                                              {{ tmp.summonerTier }}
                                              {{ tmp.summonerRank }}
                                            </td>
                                            <td>KDA</td>
                                            <td>
                                              {{
                                                tmp.totalDamageDealtToChampions
                                              }}
                                            </td>
                                            <td>
                                              <div>
                                                {{
                                                  tmp.visionWardsBoughtInGame
                                                }}
                                              </div>
                                              <div>
                                                {{ tmp.wardsPlaced }} /
                                                {{ tmp.wardsKilled }}
                                              </div>
                                            </td>
                                            <td>
                                              {{ tmp.totalMinionsKilled }}
                                            </td>
                                            <td>
                                              <div>
                                                <b-img
                                                  style="width: 25px"
                                                  rounded
                                                  alt="Rounded image"
                                                  :src="tmp.itemImg0"
                                                ></b-img>
                                                <b-img
                                                  style="width: 25px"
                                                  rounded
                                                  alt="Rounded image"
                                                  :src="tmp.itemImg1"
                                                ></b-img>
                                                <b-img
                                                  style="width: 25px"
                                                  rounded
                                                  alt="Rounded image"
                                                  :src="tmp.itemImg2"
                                                ></b-img>
                                                <b-img
                                                  style="width: 25px"
                                                  rounded
                                                  alt="Rounded image"
                                                  :src="tmp.itemImg3"
                                                ></b-img>
                                                <b-img
                                                  style="width: 25px"
                                                  rounded
                                                  alt="Rounded image"
                                                  :src="tmp.itemImg4"
                                                ></b-img>
                                                <b-img
                                                  style="width: 25px"
                                                  rounded
                                                  alt="Rounded image"
                                                  :src="tmp.itemImg5"
                                                ></b-img>
                                                <b-img
                                                  style="width: 25px"
                                                  rounded
                                                  alt="Rounded image"
                                                  :src="tmp.itemImg6"
                                                ></b-img>
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </b-dropdown-form>
                                  </b-dropdown>
                                </b-col>
                                <b-col>
                                  <div>
                                    <b-form-text
                                      >{{ item.gameMode }}
                                    </b-form-text>
                                  </div>
                                  <div>
                                    <b-form-text>{{
                                      item.win === true ? "승리" : "패배"
                                    }}</b-form-text>
                                  </div>
                                  <div>
                                    <b-form-text>플레이 시간</b-form-text>
                                  </div>
                                </b-col>
                                <b-col>
                                  <b-row>
                                    <b-col>
                                      <b-img
                                        style="width: 50px"
                                        rounded="circle"
                                        :src="item.picture"
                                      ></b-img>
                                    </b-col>
                                    <b-col>
                                      <div>
                                        <b-img
                                          style="width: 25px"
                                          rounded
                                          alt="Rounded image"
                                          :src="item.spellImg"
                                        ></b-img>
                                      </div>
                                      <div>
                                        <b-img
                                          style="width: 25px"
                                          rounde
                                          alt="Rounded image"
                                          :src="item.spellImg2"
                                        ></b-img>
                                      </div>
                                    </b-col>
                                  </b-row>
                                </b-col>
                                <b-col>
                                  <div>
                                    {{ item.kills }}/{{ item.deaths }}/{{
                                      item.assists
                                    }}
                                  </div>
                                  <div>
                                    {{
                                      (
                                        (item.kills + item.assists) /
                                        item.deaths
                                      ).toFixed(2)
                                    }}:1 평점
                                  </div>
                                </b-col>
                                <b-col>
                                  <div>{{ item.champLevel }}레벨</div>
                                  <div>{{ item.totalMinionsKilled }}CS</div>
                                  <div>
                                    {{
                                      (
                                        ((item.kills + item.assists) /
                                          item.teamChampKill) *
                                        100
                                      ).toFixed(0)
                                    }}%
                                  </div>
                                </b-col>
                                <b-col>
                                  <div>
                                    <b-img
                                      style="width: 25px"
                                      rounded
                                      alt="Rounded image"
                                      :src="item.itemImg0"
                                    ></b-img>
                                    <b-img
                                      style="width: 25px"
                                      rounded
                                      alt="Rounded image"
                                      :src="item.itemImg1"
                                    ></b-img>
                                    <b-img
                                      style="width: 25px"
                                      rounded
                                      alt="Rounded image"
                                      :src="item.itemImg2"
                                    ></b-img>
                                    <b-img
                                      style="width: 25px"
                                      rounded
                                      alt="Rounded image"
                                      :src="item.itemImg3"
                                    ></b-img>
                                  </div>
                                  <div>
                                    <b-img
                                      style="width: 25px"
                                      rounded
                                      alt="Rounded image"
                                      :src="item.itemImg4"
                                    ></b-img>
                                    <b-img
                                      style="width: 25px"
                                      rounded
                                      alt="Rounded image"
                                      :src="item.itemImg5"
                                    ></b-img>
                                    <b-img
                                      style="width: 25px"
                                      rounded
                                      alt="Rounded image"
                                      :src="item.itemImg6"
                                    ></b-img>
                                  </div>
                                </b-col>
                                <b-col>
                                  <b-row
                                    v-for="(value, index) in tmp"
                                    :key="index"
                                  >
                                    <b-col
                                      v-if="
                                        item.matchId === value.matchId &&
                                        value.win === true
                                      "
                                    >
                                      <b-img
                                        style="width: 20px"
                                        rounded
                                        alt="Rounded image"
                                        :src="value.picture"
                                      ></b-img
                                      >{{ value.summonerName }}
                                    </b-col>
                                    <b-col
                                      v-if="
                                        item.matchId === value.matchId &&
                                        value.win === false
                                      "
                                    >
                                      <b-img
                                        style="width: 20px"
                                        rounded
                                        alt="Rounded image"
                                        :src="value.picture"
                                      ></b-img
                                      >{{ value.summonerName }}
                                    </b-col>
                                  </b-row>
                                </b-col>
                              </b-row>
                            </b-col>
                          </b-row>
                        </b-list-group-item>
                      </b-list-group>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-tab>
            <b-tab title="챔피언"></b-tab>
            <b-tab title="인게임 정보"></b-tab>
          </b-tabs>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Header from "./Header.vue";
import spell from "../json/spell.json";
export default {
  data: function () {
    return {
      array: [],
      tmp: [],
      puuid: "",
      searchFormData: {
        dataOption: {},
        dataMatchNumber: {},
        dataMatchInfo: {},
        dataDetailMatchWin: [],
        dataDetailMatchlose: [],
        dataWinTeamInfo: {
          baron: {
            kills: 0,
          },
          dragon: {
            kills: 0,
          },
          tower: {
            kills: 0,
          },
          champion: {
            kills: 0,
          },
        },
        dataloseTeamInfo: {
          baron: {
            kills: 0,
          },
          dragon: {
            kills: 0,
          },
          tower: {
            kills: 0,
          },
          champion: {
            kills: 0,
          },
        },
      },
    };
  },
  methods: {
    onDataId: function (Id) {
      console.log(Id);
      this.$axios
        .get(
          "https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/" +
            Id +
            "?api_key=RGAPI-69c0864c-3a97-420e-a5d7-9c736123b0b2"
        )
        .then((res) => {
          console.log(res);
          res.data.forEach((e) => {
            if (e.queueType === "RANKED_SOLO_5x5") {
              this.searchFormData.dataOption = e;
            }
          });

          console.log(this.searchFormData.dataOption);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("항상 마지막에 실행");
        });
    },
    onDataPuuid: function (Puuid) {
      console.log(Puuid);
      this.puuid = Puuid;
      this.$axios
        .get(
          "https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/" +
            Puuid +
            "/ids?start=0&count=20" +
            "&api_key=RGAPI-69c0864c-3a97-420e-a5d7-9c736123b0b2"
        )
        .then((res) => {
          console.log(res);
          this.searchFormData.dataMatchNumber = res.data;
          console.log(this.searchFormData.dataMatchNumber);
          res.data.forEach((e) => {
            console.log(e);
            this.onDataMatch(e);
          });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("항상 마지막에 실행");
        });
    },
    onDataMatch: function (e) {
      console.log(e);
      this.$axios
        .get(
          "https://asia.api.riotgames.com/lol/match/v5/matches/" +
            e +
            "?api_key=RGAPI-69c0864c-3a97-420e-a5d7-9c736123b0b2"
        )
        .then((res) => {
          console.log(res);
          this.searchFormData.dataMatchInfo = res.data;
          console.log(this.searchFormData.dataMatchInfo);
          if (this.searchFormData.dataMatchInfo.info.gameMode === "CLASSIC") {
            console.log(this.searchFormData.dataMatchInfo.info.participants);
            res.data.info.participants.forEach((e) => {
              console.log(this.puuid);
              if (e.puuid === this.puuid) {
                e["gameMode"] = "솔랭";
                e["picture"] =
                  "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/" +
                  e.championName +
                  ".png";
                e["itemImg0"] =
                  "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/" +
                  e.item0 +
                  ".png";
                e["itemImg1"] =
                  "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/" +
                  e.item1 +
                  ".png";
                e["itemImg2"] =
                  "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/" +
                  e.item2 +
                  ".png";
                e["itemImg3"] =
                  "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/" +
                  e.item3 +
                  ".png";
                e["itemImg4"] =
                  "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/" +
                  e.item4 +
                  ".png";
                e["itemImg5"] =
                  "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/" +
                  e.item5 +
                  ".png";
                e["itemImg6"] =
                  "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/" +
                  e.item6 +
                  ".png";
                console.log(e);
                e["matchId"] = res.data.metadata.matchId;
                this.array.push(e);
                this.onSpell(e);
                this.onChamKill(e);
              } else {
                e["matchId"] = res.data.metadata.matchId;
                e["picture"] =
                  "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/" +
                  e.championName +
                  ".png";
                this.tmp.push(e);
              }
            });
          } else {
            if (this.searchFormData.dataMatchInfo.info.gameMode === "ARAM") {
              console.log(this.searchFormData.dataMatchInfo.info.participants);
              res.data.info.participants.forEach((e) => {
                console.log(this.puuid);
                if (e.puuid === this.puuid) {
                  e["gameMode"] = "무작위 총력전";
                  e["picture"] =
                    "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/" +
                    e.championName +
                    ".png";
                  e["picture"] =
                    "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/" +
                    e.championName +
                    ".png";
                  e["itemImg0"] =
                    "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/" +
                    e.item0 +
                    ".png";
                  e["itemImg1"] =
                    "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/" +
                    e.item1 +
                    ".png";
                  e["itemImg2"] =
                    "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/" +
                    e.item2 +
                    ".png";
                  e["itemImg3"] =
                    "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/" +
                    e.item3 +
                    ".png";
                  e["itemImg4"] =
                    "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/" +
                    e.item4 +
                    ".png";
                  e["itemImg5"] =
                    "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/" +
                    e.item5 +
                    ".png";
                  e["itemImg6"] =
                    "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/" +
                    e.item6 +
                    ".png";
                  console.log(e);
                  e["matchId"] = res.data.metadata.matchId;
                  this.array.push(e);
                  this.onSpell(e);
                  this.onChamKill(e);
                } else {
                  e["matchId"] = res.data.metadata.matchId;
                  e["picture"] =
                    "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/" +
                    e.championName +
                    ".png";
                  this.tmp.push(e);
                }
              });
            }
          }
          console.log();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("항상 마지막에 실행");
        });
    },
    onSpell: function (e) {
      console.log(e);
      console.log(spell);
      spell.data.forEach((n) => {
        if (e.summoner1Id + "" === n.key) {
          console.log(n);
          e["spellImg"] =
            "https://ddragon.leagueoflegends.com/cdn/10.6.1/img/spell/" +
            n.id +
            ".png";
        }
        if (e.summoner2Id + "" === n.key) {
          console.log(n);
          e["spellImg2"] =
            "https://ddragon.leagueoflegends.com/cdn/10.6.1/img/spell/" +
            n.id +
            ".png";
        }
      });
    },
    onChamKill: function (e) {
      console.log(e);
      console.log(this.searchFormData.dataMatchInfo.info.teams);
      this.searchFormData.dataMatchInfo.info.teams.forEach((n) => {
        if (n.win === e.win) {
          e["teamChampKill"] = n.objectives.champion.kills;
        }
      });
    },
    onClick: function (matchId) {
      this.searchFormData.dataDetailMatchWin = [];
      this.searchFormData.dataDetailMatchlose = [];
      console.log(matchId);
      this.$axios
        .get(
          "https://asia.api.riotgames.com/lol/match/v5/matches/" +
            matchId +
            "?api_key=RGAPI-69c0864c-3a97-420e-a5d7-9c736123b0b2"
        )
        .then((res) => {
          console.log(res);
          let tmp = [];
          tmp.push(res.data.info.teams);
          console.log(tmp);
          this.onObjectKill(tmp);
          res.data.info.participants.forEach((e) => {
            e["picture"] =
              "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/" +
              e.championName +
              ".png";
            e["itemImg0"] =
              "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/" +
              e.item0 +
              ".png";
            e["itemImg1"] =
              "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/" +
              e.item1 +
              ".png";
            e["itemImg2"] =
              "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/" +
              e.item2 +
              ".png";
            e["itemImg3"] =
              "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/" +
              e.item3 +
              ".png";
            e["itemImg4"] =
              "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/" +
              e.item4 +
              ".png";
            e["itemImg5"] =
              "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/" +
              e.item5 +
              ".png";
            e["itemImg6"] =
              "https://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/" +
              e.item6 +
              ".png";
            this.onTierInfo(e);
            this.onSpell(e);
            if (e.win === true) {
              this.searchFormData.dataDetailMatchWin.push(e);
            } else {
              this.searchFormData.dataDetailMatchlose.push(e);
            }
            console.log(this.searchFormData.dataDetailMatchWin);
            console.log(this.searchFormData.dataDetailMatchlose);
          });
          console.log();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("항상 마지막에 실행");
        });
    },
    onTierInfo: function (e) {
      console.log(e);
      this.$axios
        .get(
          "https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/" +
            e.summonerId +
            "?api_key=RGAPI-69c0864c-3a97-420e-a5d7-9c736123b0b2"
        )
        .then((res) => {
          console.log(res);
          res.data.forEach((n) => {
            console.log(n);
            if (e.summonerId === n.summonerId) {
              e["summonerTier"] = n.tier;
              e["summonerRank"] = n.rank;
              this.tmp.push(e);
              console.log(e);
            }
          });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("항상 마지막에 실행");
        });
    },
    onObjectKill: function (tmp) {
      console.log(tmp);

      tmp.forEach((e) => {
        console.log(e);
        e.forEach((n) => {
          console.log(n);
          if (n.win === true) {
            this.searchFormData.dataWinTeamInfo = n.objectives;
          } else {
            this.searchFormData.dataloseTeamInfo = n.objectives;
          }
        });
      });
    },
  },
  components: {
    Header,
  },
  mounted: function () {},
};
</script>