<template>
  <div id="myquestion">
    <div class="container">
      <div class="card">
        <div class="title">
          <span>My Question</span>
        </div>
        <div class="content">
          <div class="question--list" v-if="myQuestion.length > 0">
            <Question-List-Item v-for="question in myQuestion" :key="question._id" :question="question"></Question-List-Item>
          </div>
          <p v-else style="padding: 20px">No Content</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionListItem from '@/components/QuestionListItem'
import { mapState, mapActions } from 'vuex'

export default {
  components: { QuestionListItem },
  created () {
    this.fetchMyQuestion(this.$route.params.id)
  },
  computed: {
    ...mapState(['myQuestion'])
  },
  methods: {
    ...mapActions(['fetchMyQuestion'])
  }
}
</script>

<style>

</style>
