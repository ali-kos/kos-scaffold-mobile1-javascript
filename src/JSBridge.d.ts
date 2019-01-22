interface API {
  actionSheet: {
    /**
     * @description 标题
     * @requires 否
     * @default ""
     */
    title: string;
    /**
     * @description 一组按钮
     * @requires 是
     * @default ""
     */
    btns: string[];
    /**
     * @description 取消按钮文字
     * @requires 否
     * @default ""
     */
    cancelBtn: string;
    /**
     * @description （iOS 特殊处理）指定按钮的索引号, 从 0 开始; 使用场景: 需要删除或清除数据等类似场景, 默认红色
     * @requires 否
     * @default ""
     */
    destructiveBtnIndex: string;
  };
  alert: {
    /**
     * @description 标题
     * @requires 否
     * @default ""
     */
    title: string;
    /**
     * @description 文本内容
     * @requires 否
     * @default ""
     */
    message: string;
    /**
     * @description 对齐方式
     * @requires 否
     * @default iOS "center", Android "left"
     */
    align: 'left' | 'center' | 'right';
    /**
     * @description 按钮文字
     * @requires 否
     * @default 确定
     */
    button: string;
  };
  confirm: {
    /**
     * @description 标题
     * @requires 否
     * @default ""
     */
    title: string;
    /**
     * @description 文本内容
     * @requires 否
     * @default ""
     */
    message: string;
    /**
     * @description 对齐方式
     * @requires 否
     * @default iOS "center", Android "left"
     */
    align: 'left' | 'center' | 'right';
    /**
     * @description 确定按钮文字
     * @requires 否
     * @default 确定
     */
    okButton: string;
    /**
     * @description 取消按钮文字
     * @requires 否
     * @default 取消
     */
    cancelButton: string;
  };
  hideLoading: never;
  showLoading: {
    /**
     * @description 文本内容；如需设为无文案，需传入一个空格
     * @requires 否
     * @default 加载中
     */
    text: string;
    /**
     * @description 延迟多少毫秒后显示；如果在此时间之前调用了 hideLoading，则不会再显示
     * @requires 否
     * @default 0
     */
    delay: number;
    /**
     * @description 默认情况下容器会在 pageFinish 后主动隐藏加载框，默认 true, 传入 false，关掉自动隐藏（only Android）
     * @requires 否
     * @default true
     */
    autoHide: boolean;
    /**
     * @description 安卓返回键是否消掉加载框，默认物理返回键会消掉加载框（only Android）
     * @requires 否
     * @default true
     */
    cancelable: boolean;
  };
  hideTitleLoading: never;
  showTitleLoading: never;
  setBarBottomLineColor: {
    /**
     * @description 导航栏底部细线颜色; 十六进制;
     * @requires 必选
     * @default ""
     * @example color: parseInt('ff0000', 16)
     */
    color: number;
  };
  /**
   * @description 隐藏
   */
  hideOptionMenu: never;
  showOptionMenu: never;
  setOptionMenu: {
    /**
     * @description 右按钮文字
     * @requires 是
     * @default ""
     */
    title: string;
    /**
     * @description 右按钮图标 URL，base64（since 9.0）8.3 及以前：iOS 40x40（周边不留白）, Android 50x50（四边各透明留白 5px）8.4 及以后：两个平台统一使用 40x40（周边不留白）
     * @requires 是
     * @default ""
     */
    icon: string;
    /**
     * @description 红点的数值
     * @requires 否
     * @default ""
     */
    redDot: string;
    /**
     * @description 重置到系统默认，当 reset=true 时，忽略其他参数
     * @requires 是
     * @default false
     */
    reset: boolean;
    /**
     * @description 文字颜色值
     * @requires 否
     * @default #ffffff
     */
    color: string;
    /**
     * @description 在需要设置多个 option 的情况下，是否保留默认的 optionMenu
     * @requires 否
     * @default false
     */
    override: string;
    /**
     * @description 设置多个按钮
     * @requires 否
     * @default []
     */
    menus: string[];
    /**
     * @description 是否阻止默认的分享功能（默认是弹分享框）preventDefault=true 会阻止默认的分享
     * @requires 否
     * @default 
     */
    preventDefault: boolean;
    /**
     * @description 根据图片类型加载容器预置图片，与 title、icon 三选一。注意: 只支持单个 optionMenu 变色。具体类型包含: user（账户）、filter（筛选器）、search（查找）、add（添加）、settings（设置）、scan（扫一扫）、info（信息）、help（帮助）、locate（定位）、more（更多）、mail（邮箱 10.0.8 及以上）
     * @requires 否
     * @default 
     */
    icontype: string;
    /**
     * @description 设置盲人模式阅读文案
     * @requires 否
     * @default 
     */
    contentDesc: string;
  };
  setTitle: {
    /**
     * @description 主标题文案
     * @requires 否
     * @default 
     */
    title: string;
    /**
     * @description 副标题文案
     * @requires 否
     * @default 
     */
    subtitle: string;
    /**
     * @description 支持 URL 或者 base64，请使用一张 3X 图，如果设置了 image，则前两个参数失效，并且不从 webview 的回调中读取 title
     * @requires 否
     * @default 
     */
    image: string;
  };
  setTitleColor: {
    /**
     * @description 色值，十六进制(官方文档与示例不匹配, 需要具体尝试一下是十进制还是十六进制)
     * @requires 是
     * @default 
     * @example color: parseInt('108ee9', 16),
     */
    color: number;
    /**
     * @description 是否重置为支付宝默认颜色
     * @requires 否
     * @default 
     */
    reset: boolean;
    /**
     * @description 如果当前是透明的导航头，重置为默认的白色
     * @requires 否
     * @default 
     */
    resetTransparent: boolean;
  };
  toast: {
    /**
     * @description 文字内容
     * @requires 是
     * @default 
     */
    content: string;
    /**
     * @description excption 类型必须传文案
     * @requires 是
     * @default none
     */
    type: 'none' | 'success' | 'fail' | 'exception';
    /**
     * @description 显示时长，单位为毫秒
     * @requires 否
     * @default 2000
     */
    duration: number;
    /**
     * @description 左为正方向，单位为 px
     * @requires 否
     * @default 0
     */
    xOffset: number;
    /**
     * @description 上为正方向，单位为 px
     * @requires 否
     * @default 0
     */
    yOffset: number;
  };
  getAPDataStorage: {
    /**
     * @description 用户维度存储还是公共存储
     * @requires 否
     * @default common
     */
    type: 'user' | 'common';
    /**
     * @description 自定义的业务标识，可与相应的客户端存取代码约定
     * @requires 否
     * @default NebulaBiz
     */
    business: string;
    /**
     * @description 自定义数据的 key
     * @requires 是
     * @default 
     */
    key: string;
  };
  removeAPDataStorage: {
    /**
     * @description 用户维度存储还是公共存储
     * @requires 否
     * @default common
     */
    type: 'user' | 'common';
    /**
     * @description 自定义的业务标识，可与相应的客户端存取代码约定
     * @requires 否
     * @default NebulaBiz
     */
    business: string;
    /**
     * @description 自定义数据的 key
     * @requires 是
     * @default 
     */
    key: string;
  };
  setAPDataStorage: {
    /**
     * @description 用户维度存储还是公共存储
     * @requires 否
     * @default common
     */
    type: 'user' | 'common';
    /**
     * @description 自定义的业务标识，可与相应的客户端存取代码约定
     * @requires 否
     * @default NebulaBiz
     */
    business: string;
    /**
     * @description 自定义数据的 key
     * @requires 是
     * @default 
     */
    key: string;
    /**
     * @description 需要存储的值，仅支持字符串类型。JSON 数据需要先字符串化
     * @requires 是
     * @default ""
     */
    value: string;
  };
  scan: {
    /**
     * @description 扫描目标类型，二维码/条形码
     * @requires 是
     * @default 
     */
    type: 'qr' | 'bar';
    /**
     * @description “scan”只扫码值; “route”用码值路由; “scanAndRoute”扫描并路由，类同首页效果
     * @requires 否
     * @default scan
     */
    actionType: 'scan' | 'route' | 'scanAndRoute';
    /**
     * @description 指定用于“route”操作类型的码值
     * @requires 否
     * @default 
     */
    qrcode: string;
  };
  pushWindow: {
    url: string;
    param: {};
    passData: {};
  };
  popWindow: never;
  popTo: {
    /**
     * @description 目标界面在会话界面栈中的索引；如果小于零，则将与当前界面的 index 相加
     * @requires 是
     * @default 
     */
    index: number;
    /**
     * @description 目标界面的 URL 匹配表达式（URL 如果包含 urlPattern，匹配成功）
     * @requires 否
     * @default 
     */
    urlPattern: string;
  };
  startApp: {
    /**
     * @description 钱包内应用 ID
     * @requires 是
     * @default 
     */
    appId: string;
    /**
     * @description 启动应用的参数, 由具体业务应用定义
     * @requires 否
     * @default 
     */
    param: {};
    /**
     * @description 是否先退出当前 App 再启动新的 App。适用于页面用作中转页的情况
     * @requires 否
     * @default 
     */
    closeCurrentApp: string;
  };
  exitApp: never;
  /**
   * @description 去皮
   */
  clearTare: never;
  /**
   * @description 置零
   */
  zero: never;
  /**
   * @description 网络请求
   */
  doRequest: {
    /**
     * @description 地址
     */
    url: string;
    /**
     * @description method
     */
    method: 'get' | 'post';
    /**
     * @description 传输的数据, object格式
     */
    data: {};
    /**
     * @description 是否需要显示loading
     */
    needLoading?: boolean;
    /**
     * @description 是否需要获取token
     */
    needToken?: boolean;
  };
  /**
   * @description 网络请求
   */
  doScan: {
    /**
     * @description 标题栏文字
     * @default 扫一扫
     */
    title: string;
    /**
     * @description 扫码框下方文字
     * @default 放入框内，自动扫描
     */
    content: string;
  };
}

type Call = <key extends keyof API>(
  command: key,
  options?: API[key],
  callback?: () => void
) => void;

export declare module AlipayJSBridge {
  declare const call: Call;
}

declare global {
  interface DocumentEventMap {
    /**
     * @description 初始化完毕
     */
    AlipayJSBridgeReady: string;
    /**
     * @description 点击标题栏
     */
    titleClick: string;
    /**
     * @description 点击副标题栏
     */
    subtitleClick: string;
    /**
     * @description 当一个 webview 界面不可见时
     */
    pause: string;
    /**
     * @description 页面恢复运行
     */
    resume: string;
    /**
     * @description 点击右上角按钮
     */
    optionMenu: string;
    /**
     * @description 回退
     */
    back: string;
    /**
     * @description 添加通知
     */
    addNotifyListener: string;
    /**
     * @description 移除通知
     */
    removeNotifyListener: string;
    /**
     * @description 分发消息
     */
    postNotification: string;
    /**
     * @description 重量改变
     */
    weightChange: string;
    /**
     * @description 接收扫码结果
     */
    scan: string;
  }
}
