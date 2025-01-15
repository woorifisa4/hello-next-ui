### Prettier 설정 및 자동 TailwindCSS 클래스 정렬 방법

#### 1. Prettier 확장 프로그램 설치

1. **VS Code에서 확장 프로그램 설치**:
   - 좌측 도구 모음에서 **Extensions** 탭 열기 (`Ctrl+Shift+X`).
   - 검색창에 **Prettier - Code formatter**를 입력하고 해당 확장을 설치합니다.  
     [Prettier 확장 바로가기](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

---

#### 2. VS Code 설정 변경

1. **Prettier를 기본 포맷터로 설정**:

   - **파일 > 설정 > 설정** 또는 `Ctrl+,`로 설정 창 열기.
   - 검색창에 **Default Formatter**를 입력.
   - **Editor: Default Formatter**를 `esbenp.prettier-vscode`로 설정.

2. **저장 시 자동 포맷팅 활성화**:
   - 설정 창의 검색창에 **Format On Save**를 입력.
   - **Editor: Format On Save** 옵션을 활성화(체크)합니다.

---

#### 3. TailwindCSS 클래스 정렬 지원 활성화

- 설정 창 우측 상단의 파일 모양 아이콘 클릭 → `settings.json` 열기.
- 아래 내용을 추가합니다:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.experimental.classRegex": [
    "tw`([^`]*)",
    "tw\\(([^)]*)",
    "tw\\.\\w+`([^`]*)"
  ]
}
```

---

#### 4. Prettier 사용 확인

- 이제 **파일 저장**(`Ctrl+S`) 시 Prettier가 설정에 따라 자동으로 포맷팅하며, TailwindCSS 클래스 순서도 정렬됩니다.
- `.prettierrc` 파일 설정은 레포지토리에서 공유되므로, 별도로 추가 설정할 필요가 없습니다.

---

##### 참고

- **TailwindCSS 클래스 정렬 문제** 발생 시, 아래 명령어로 필요한 플러그인이 설치되었는지 확인하세요:
  ```bash
  pnpm add -D prettier-plugin-tailwindcss
  ```

---

이 설정을 완료하면 추가적인 명령 없이 **저장만으로 자동 포맷팅과 TailwindCSS 정렬**을 사용할 수 있습니다! 😊
