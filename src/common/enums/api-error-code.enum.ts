// src/common/enums/api-error-code.enum.ts

export enum ApiErrorCode {
    TIMEOUT = -1,  // 系统繁忙
    SUCCESS = 200, // 成功
    INVALID_USER_ID = 10001,  // 用户id无效
    INVALID_POST_ID = 10002,  // 请求id无效

    INVALID_PARAM = 10001, // 参与格式错误
    INVALID_CREDENTIAL = 40001, // 40001	invalid credential	不合法的调用凭证
    TOKEN_MISSING = 41001, // 41001: access_token missing	缺失access_token参数
    INVALID_TOKEN = 41002, // 41002: invalid access_token	不合法的access_token
    
    API_UNAUTHORIZED = 50001, // 50001: api unauthorized 接口未授权
    API_LIMIT = 50002, // 45011	api limit	频率限制
}