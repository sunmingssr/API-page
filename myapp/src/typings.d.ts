import {getInitialState} from "@/app";

declare module 'slash2';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module 'omit.js';
declare module 'numeral';
declare module '@antv/data-set';
declare module 'mockjs';
declare module 'react-fittext';
declare module 'bizcharts-plugin-slider';

declare const REACT_APP_ENV: 'test' | 'dev' | 'pre' | false;


interface InitialState {
  loginUser:API.UserVO
}


/**
 * 主键
 */
@TableId(type = IdType.AUTO)
private Integer id;

/**
 * 名称
 */
private String name;

/**
 * 描述
 */
private String description;

/**
 * 接口地址
 */
private String url;

/**
 * 请求头
 */
private String requestHeader;

/**
 * 响应头
 */
private String responseHeader;

/**
 * 接口状态(默认 0 - 关闭 1-开启)
 */
private Integer status;

/**
 * 请求类型
 */
private String method;

/**
 * 创建人
 */
private Long userId;

/**
 * 创建时间
 */
private Date createTime;

/**
 * 更新时间
 */
private Date updateTime;
