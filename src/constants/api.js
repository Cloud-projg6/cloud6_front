// export const BASE_URL = 'http://localhost:8080';
// export const BASE_URL = 'http://alb-user40-team6-backend-419547333.us-east-2.elb.amazonaws.com';
// BASE_URL을 프론트엔드가 구동 중인 CloudFront 주소(HTTPS)로 일치
export const BASE_URL = 'https://d913vpzid8uar.cloudfront.net'
export const BOOKS_URL = `${BASE_URL}/books`;
export const AUTH_URL = `${BASE_URL}/auth`;