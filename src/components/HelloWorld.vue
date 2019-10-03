<template>
  <v-container>
    <v-btn @click="getGames" color="success" class="mr-1">Get Schedule</v-btn>
    <v-btn @click="clearGames" color="warning">Clear</v-btn>
    <v-expansion-panels>
      <v-expansion-panel v-for="(game, index) in games" :key="index" expand>
        <v-expansion-panel-header>
          <div class="title">
            {{ game.date }}
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="text">
            {{ `${game.homeTeam} at ${game.awayTeam}` }}
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import getGames from '@/code/nhl-info/get-games';
import Game from '@/code/nhl-info/Game';

@Component
export default class HelloWorld extends Vue {
  private games: Game[] = [];

  private async getGames() {
    try {
      this.games = await getGames();
    } catch (e) {
      console.error(e);
      this.games = [];
    }
  }

  private clearGames() {
    this.games = [];
  }
}
</script>
