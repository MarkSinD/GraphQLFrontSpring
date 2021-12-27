import React from "react";
import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
import Assignment from "@material-ui/icons/Assignment";
import SettingsIcon from "@material-ui/icons/Settings";
import {PlaylistPlay} from "@material-ui/icons";
import StubHello from "../Stub/StubHello";
import StubMark from "../Stub/StubMark";
import StubGreat from "../Stub/StubGreat"; 

export const routes = {
  myTasks: {
    exact: true,
    path: "/about?param=text",
    label: "Мои задачи",
    component: StubHello,
    icon: <Assignment/>,
    showInMenu: true
  },
  questionnairePassing: {
    path: "/a",
    label: "Анкета",
    component: StubMark,
    showInMenu: false
  },
  processes: {
    path: "/b",
    label: "Запущенные процессы",
    component: StubGreat,
    showInMenu: true,
    icon: <PlaylistPlay style={{fontSize: 28}}/>,
    authz: {
      target: "Feedbacks",
      permission: "create"
    }
  },
  startFeedbackStarter: {
    exact: true,
    path: "/about?param=text",
    label: "Запуск опроса",
    component: StubMark,
    icon: <PlayCircleFilled/>,
    showInMenu: true,
    authz: {
      target: "Feedbacks",
      permission: "create"
    }
  },
  feedbackList: {
    path: "/c",
    label: "Результаты опросов",
    component: StubHello,
    icon: <FormatListBulleted/>,
    showInMenu: true,
    authz: {
      target: "Feedbacks",
      permission: "browse"
    }
  },
  feedback: {
    path: "/feedback/:id",
    label: "Опрос",
    component: StubGreat,
    showInMenu: false
  },
  task: {
    path: "/task/:id",
    label: "Задача",
    component: StubMark,
    showInMenu: false
  },
  processTasks: {
    path: "/process/:id",
    label: "Задачи процесса",
    component: StubHello,
    showInMenu: false
  },
  templateQuestionLists: {
    path: "/a",
    label: "Администрирование опросников",
    component: StubMark,
    showInMenu: true,
    authz: {
      target: 'TemplateQuestionLists',
      permission: 'update'
    },
    icon: <SettingsIcon/>
  },
  editTemplateQuestionList: {
    path: "/templateQuestionList/:id",
    label: "Редактирование опросника",
    component: StubGreat,
    showInMenu: false
  },
  newTemplateQuestionList: {
    path: "/newTemplateQuestionList/:id",
    label: "Создание нового шаблона опросника",
    component: StubMark,
    showInMenu: false
  }
};

export const getHomePageRoute = () => {
  return routes.myTasks;
};

export const getAllRoutes = () => {
  return routes;
};

export const getMenuRoutes = () => {
  let resultList = {};
  Object.keys(routes).forEach(key => {
    if (routes[key].showInMenu) {
      resultList[key] = routes[key];
    }
  });
  return resultList;
};
