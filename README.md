# [vue3-posts](https://www.gymcoding.co/vuejs-3-)

## 프로젝트 구성

https://www.gymcoding.co/d871ce77473941058d578b2e41250570

## Custom Directives

Vue 코어에서 기본으로 제공하는 디렉티브(v-if 또는 v-for와 같은) 외에도 Vue를 사용하면 직접 커스텀 디렉티브를 만들 수 있습니다.  `Custom Directives`는 주로 일반 요소에 대한 low-level(저수준) DOM 접근과 관련된 로직을 재사용하기 위한 것입니다.

## Composables

`Composable`은 Vue Composition API를 활용하여 상태 저장 비즈니스 로직을 캡슐화 하고 재사용하는 기능을 말합니다.

여러 곳에서 날짜 형식을 지정해야 한다면 우리는 이러한 로직을 재사용 하기 위해서 함수(모듈)로 추출합니다. 이러한 함수는 상태 비저장 로직을 캡슐화 한 것입니다. 간단한 Input/Output만 있는 구조 입니다. 이러한 상태 비저장 로직를 재사용하기 위한 많은 라이브러리가 있으며, 예를 들어 lodash, dayjs와 같은 것들이 있습니다.

하지만 상태 저장 로직은 사용하면서 변경되는 상태 관리가 포함됩니다. 간단한 예는 페이지에서 마우스의 현재 위치를 추적하는 것입니다.