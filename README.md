# 202403preonboarding
### Mission
Add와 Delete 기능 2 가지를 만듭니다.

input 창에 list1을 입력 후 Add 버튼을 누르면 input 창 하단에 list1 컴포넌트가 뜹니다.
각 list의 delete 버튼을 누르면 해당 list 컴포넌트가 삭제됩니다.

![image](https://github.com/suhong99/202403preonboarding/assets/120103909/50ca5569-e0d2-4095-947c-5bafd364940b)


### Develop
스토리북 적용하기(Button, Input)   
![image](https://github.com/suhong99/202403preonboarding/assets/120103909/9125f8f4-f3b1-4d97-904d-6b42dbdac1b9)   


테스트 코드작성(Select)
setup용 함수를 만들어서 반복되는 setup작업 모듈화   
```Typescript
const setUpDropOpen = async () => {
  render(<Select />);
  const trigger = screen.getByRole('button');
  await userEvent.click(trigger);
  return trigger;
};
```


