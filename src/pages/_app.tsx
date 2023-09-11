import '@/styles/reset.css'
import '@/styles/globals.css'
import '../fontello/css/customicon.css';
import React, { useEffect, useState }  from 'react';
import type { AppProps } from 'next/app';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRouter } from 'next/router';
import BaseLayout from './layout';


//react query 공통 에러처리
const queryClient = new QueryClient({
  defaultOptions: {
      // 기본 에러처리 useQuery 
      queries: {
          retry: 0,
          useErrorBoundary: true,
          onError: (err:any) => {
              // 상세 에러 확인시 사용
              console.log(err);
          },
          onSuccess: (res:any) => {
              if(typeof res !== 'object'){
                  console.log('데이터가 올바르지 않습니다. 출력 데이터: ', res);
                  return false;
              }

              return res;
          },
      },
      // mutations 에러처리 useMutation
      mutations: {
          onError: (err:any) => {
              // 상세 에러 확인시 사용
              console.log(err);
          },
      
      },
  }
})

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
      // let check = checkLogin()
      // setIsLoggedIn(check);
   
  }, [router]);


  useEffect(() => {
    // const path = router.pathname.split('/')
    // path.shift() // 맨앞 빈값 삭제

    // if(isLoggedIn){
    //   // 로그인 상태일때 접근 불가능 페이지
    //   if(path.length > 0){
    //     if(path[0] == 'login'){
    //       router.back()
    //     }
    //   }
    // } else {
    //   // 로그아웃일때 접근 불가능 페이지
    //   if(path.length > 0){
    //     if(path[0] == 'mypage'){
    //       router.back()
    //     }
    //   }
    // }
    
  }, [router])
  

  return (
      <>
        {/* react query provider */}
        <QueryClientProvider client={queryClient}>
          {process.env.NODE_ENV !== 'production' ? <ReactQueryDevtools initialIsOpen={false} /> : null}
    
          {/* body */}
            <BaseLayout>
              <Component {...pageProps} />
            </BaseLayout>
        </QueryClientProvider>
      </>
  );
}

