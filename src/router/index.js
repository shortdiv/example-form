import Vue from "vue";
import Router from "vue-router";
import JollofForm from "../components/JollofForm";
import SubmissionFail from "../components/SubmissionFail.vue";
import SubmissionSuccess from "../components/SubmissionSuccess.vue";
import store from "../state/store";

Vue.use(Router);

const hasDBInitialized = (to, from, next) => {
  if (store.state.poll.db === null) {
    store
      .dispatch("poll/initDB")
      .then(() => next())
      .catch(() => next({ name: "404", query: { redirect: to.fullPath } }));
  } else {
    next();
  }
};

const router = new Router({
  routes: [
    {
      path: "/",
      name: "JollofForm",
      component: JollofForm,
      beforeEnter: hasDBInitialized
    },
    {
      path: "/thanks",
      name: "success",
      component: SubmissionSuccess
    },
    {
      path: "/404",
      name: "fail",
      component: SubmissionFail
    }
  ]
});

export default router;
