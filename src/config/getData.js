import fetch from './fetch'
import { getStore } from '../config/mUtils'

/**
 * 保存患者量表任务
 */
export const postPatientScale = (id, uid, answers) => fetch('/patient-scale/save', {
  id,
  uid,
  answers
}, 'POST');


/**
 * 获取患者量表任务
 */
export const getPatientScaleInfo = (id) => fetch('/patient-scale/info', {
  id
});

/**
 * 获取医嘱详情
 */
export const getDoctorOrderInfo = (id) => fetch('/patient/doctor-order', {
  id
});

/**
 * 获取药物
 */
export const getDrugs = (keywords, type) => fetch('/drug/all', {
  keywords,
  type
});

/**
 * 获取助眠训练列表
 */
export const getRelaxs = () => fetch('/relax/index');

/**
 * 获取助眠训练详情
 */
export const getRelaxMusic = (id) => fetch('/relax/view', { id });

/**
 * 提交反馈信息
 */
export const postFeedback = (content, doctor_order_id, uid) => fetch('/feedback/create', {
  content,
  doctor_order_id,
  uid
}, 'POST');

/**
 * 获取课程列表
 */
export const getCurriculums = () => fetch('/curriculum/index');

/**
 * 获取用户课程信息
 */
export const getUserCourseInfo = (id) => fetch('/curriculum/usercourse', { id });

/**
 * 提交课程开始
 */
export const postCurriculemStart = (id) => fetch('/curriculum/start', { id }, 'POST');

/**
 * 提交课程完成
 */
export const postCurriculemFinished = (id) => fetch('/curriculum/finished', { id }, 'POST');

/**
 * 提交课程评星
 */
export const postCurriculemStar = (id, star) => fetch('/curriculum/star', { id, star }, 'POST');

/**
 * 获取课程详情
 */
export const getCurriculum = (id) => fetch('/curriculum/view', { id });

/**
 * 获取助眠训练列表
 */
export const getHypnotics = () => fetch('/hypnotic/index');

/**
 * 获取助眠训练详情
 */
export const getHypnotic = (id) => fetch('/hypnotic/view', { id });

/**
 * 获取助眠训练课程详情
 */
export const getHypnoticTraining = (id) => fetch('/hypnotic/training', { id });

/**
 * 获取任务列表
 */
export const getPatientScales = () => fetch('/patient-scale/list');

/**
 * 获取医嘱列表
 */
export const getDoctorOrders = () => fetch('/patient/doctor-orders');

/**
 * 获取用户信息
 */
export const getUser = () => fetch('/users/info', {
  uid: getStore('uid'),
  openid: getStore('openid')
});

/**
 * 修改用户信息
 */
export const modifyUser = (uid, name, gender, birthday, demand) => fetch('/users/modify', {
  uid,
  name,
  gender,
  birthday,
  demand
}, 'POST')

/**
 * 获取睡眠记录
 */
export const getDailies = (month = '') => fetch('/dailies/list', {
  month
});

/**
 * 保存睡眠记录
 */
export const saveDaily = (date, daily) => fetch('/dailies/save', {
  date,
  daily
}, 'POST');

/**
 * 获取评估报告
 */
export const getAssessments = (date = '') => fetch('/report/assessment', { date });

/**
 * 获取评测
 */
export const getEvaluaions = (type) => fetch('/evaluation/view', { type });

/**
 * 手机号注册
 */
export const sendSignup = (code, mobile, validate_token, name, gender, birthday, demand, doctor_uid) => fetch('/users/mobilesignup', {
  code,
  mobile,
  validate_token,
  name,
  gender,
  birthday,
  demand,
  doctor_uid
}, 'POST');

/**
 * 手机号登录
 */
export const sendLogin = (code, mobile, validate_token) => fetch('/users/mobilelogin', {
  code,
  mobile,
  validate_token
}, 'POST');

/**
 * 退出登录
 */
export const signout = () => fetch('/users/signout');

/**
 * 检测帐号是否存在
 */
export const checkExsis = (checkNumber, type, scene) => fetch('/users/exists', {
  [type]: checkNumber,
  type,
  scene,
});

/**
 * 检测用户睡眠记录，课程，医嘱，量表等完成状态
 */
export const getStatus = () => fetch('/users/status', { uid: getStore('uid') });

/**
 * 检测用户登录状态
 */
export const checkUser = (uid) => fetch('/users/check', { uid }, 'POST');

/**
 * 获取短信验证码
 */
export const mobileCode = (phone, scene = 'login') => fetch('/verifycode/send', {
  mobile: phone,
  scene: scene,
  type: 'sms'
}, 'POST');

/* 微信--- 开始 */

/**
 * 获取微信用户信息
 */
export const getWxUserInfo = (code, state) => fetch('/wx/userinfo', {
  code,
  state
})

/* 微信--- 结束 */


