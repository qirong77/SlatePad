export const Bold = (props: JSX.IntrinsicElements['button']) => {
  return (
    <IconContainer {...props}>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        data-icon="BoldOutlined">
        <path
          d="M5 2.709C5 2.317 5.317 2 5.709 2h6.734a5.317 5.317 0 0 1 3.686 9.148 5.671 5.671 0 0 1-2.623 10.7H5.71a.709.709 0 0 1-.71-.707V2.71Zm2 7.798h5.443a3.19 3.19 0 0 0 3.19-3.19c0-1.762-1.428-3.317-3.19-3.317H7v6.507Zm0 2.126v7.09h6.507a3.544 3.544 0 0 0 0-7.09H7Z"
          fill="currentColor"></path>
      </svg>
    </IconContainer>
  )
}
export const Arrow = (props: JSX.IntrinsicElements['button']) => {
  return (
    <IconContainer {...props}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M7.712 11.351L3.34 5.9a.45.45 0 010-.538.278.278 0 01.215-.112h8.89c.168 0 .305.17.305.381a.432.432 0 01-.09.269l-4.372 5.451c-.159.199-.417.199-.576 0z"
          fill="currentColor"></path>
      </svg>
    </IconContainer>
  )
}
export const Search = (props: JSX.IntrinsicElements['svg']) => {
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-icon="SearchOutlineOutlined">
      <path
        d="M16.473 17.887A9.46 9.46 0 0 1 10.5 20a9.5 9.5 0 1 1 9.5-9.5 9.46 9.46 0 0 1-2.113 5.973l3.773 3.773a.996.996 0 0 1-.007 1.407.996.996 0 0 1-1.407.007l-3.773-3.773ZM18 10.5a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0Z"
        fill="currentColor"></path>
    </svg>
  )
}
export const Collapse = (props: JSX.IntrinsicElements['button']) => {
  return (
    <IconContainer {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path
          fill="currentColor"
          d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8Zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0Zm-.5 11.707-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793Z"
        />
      </svg>
    </IconContainer>
  )
}
export const Italic = (props: JSX.IntrinsicElements['button']) => {
  return (
    <IconContainer {...props}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-icon="ItalicOutlined">
        <path
          d="M14.825 5.077 11.19 18.923h4.052a1.038 1.038 0 1 1 0 2.077H4.954a1.038 1.038 0 1 1 0-2.077h4.053l3.636-13.846H8.591A1.038 1.038 0 1 1 8.59 3h10.287a1.038 1.038 0 0 1 0 2.077h-4.053Z"
          fill="currentColor"></path>
      </svg>
    </IconContainer>
  )
}
export const Image = (props: JSX.IntrinsicElements['button']) => {
  return (
    <IconContainer {...props}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m10.141 17.988-4.275-.01a.3.3 0 0 1-.212-.512l4.133-4.133a.4.4 0 0 1 .566 0l1.907 1.907 5.057-5.057a.4.4 0 0 1 .683.283V17.7a.3.3 0 0 1-.3.3h-7.476a.301.301 0 0 1-.083-.012ZM4 22c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4Zm0-2h16V4H4v16ZM6 6h3v3H6V6Z"
          fill="currentColor"></path>
      </svg>
    </IconContainer>
  )
}
export const Menu = (props: JSX.IntrinsicElements['button']) => {
  return (
    <IconContainer onClick={props.onClick}>
      <svg
        viewBox="0 0 1025 1024"
        version="1.1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2185"
        width="16"
        height="16">
        <path
          fill="currentColor"
          d="M980.8 468.8H43.2C17.6 468.8 0 486.4 0 512s17.6 43.2 43.2 43.2h939.2c25.6 0 43.2-17.6 43.2-43.2-1.6-25.6-19.2-43.2-44.8-43.2zM980.8 768H43.2C17.6 768 0 785.6 0 811.2s17.6 43.2 43.2 43.2h939.2c25.6 0 43.2-17.6 43.2-43.2-1.6-25.6-19.2-43.2-44.8-43.2zM43.2 256h939.2c25.6 0 43.2-17.6 43.2-43.2s-17.6-43.2-43.2-43.2H43.2c-25.6 0-43.2 17.6-43.2 43.2S17.6 256 43.2 256z"
          p-id="2186"></path>
      </svg>
    </IconContainer>
  )
}
export const MenuBack = (props: JSX.IntrinsicElements['button']) => {
  return (
    <IconContainer {...props}>
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="16833"
        width="16"
        height="16">
        <path
          d="M186.758633 563.798368l328.244498-328.244498a77.358853 77.358853 0 1 0-109.399779-109.39978L22.670254 509.087189a77.358853 77.358853 0 0 0 0 109.399779l382.910518 382.842778a77.313693 77.313693 0 0 0 109.399779 0 77.404013 77.404013 0 0 0 0-109.399779L186.758633 563.798368z"
          fill="currentColor"
          p-id="16834"></path>
        <path
          d="M673.130408 563.798368l328.221918-328.244498a77.358853 77.358853 0 1 0-109.399779-109.39978L509.019449 509.087189a77.358853 77.358853 0 0 0 0 109.399779l382.910518 382.842778a77.358853 77.358853 0 1 0 109.399779-109.399779L673.130408 563.798368z"
          fill="currentColor"
          p-id="16835"></path>
      </svg>
    </IconContainer>
  )
}
export const NumberList = (props: JSX.IntrinsicElements['button']) => {
  return (
    <IconContainer {...props}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-icon="OrdeListOutlined">
        <path
          d="M1.338 2.342v.909c0 .189.211.299.366.195l.96-.471v3.579c0 .187.152.34.34.34h.661a.34.34 0 0 0 .34-.34V1.673a.34.34 0 0 0-.34-.34h-.71a.34.34 0 0 0-.163.042l-1.278.669a.34.34 0 0 0-.176.298ZM8.4 10.667a.4.4 0 0 0-.4.4v1.2c0 .22.18.4.4.4h13.867a.4.4 0 0 0 .4-.4v-1.2a.4.4 0 0 0-.4-.4H8.4ZM4.983 13.42c.194 0 .35.15.35.335v.49a.343.343 0 0 1-.35.336h-3.3a.343.343 0 0 1-.35-.335v-.65l2.473-2.578a.814.814 0 0 0 .144-.2.696.696 0 0 0 .027-.183.49.49 0 0 0-.153-.362c-.105-.1-.257-.153-.467-.157a.694.694 0 0 0-.455.144.586.586 0 0 0-.217.4c0 .11-.094.2-.21.2h-.918a.22.22 0 0 1-.223-.22 1.66 1.66 0 0 1 .592-1.21c.37-.31.827-.469 1.365-.474.59.005 1.078.166 1.452.48.385.315.584.721.59 1.207 0 .39-.144.74-.43 1.043l-1.66 1.734h1.74ZM8.4 2.667a.4.4 0 0 0-.4.4v1.2c0 .22.18.4.4.4h13.867a.4.4 0 0 0 .4-.4v-1.2a.4.4 0 0 0-.4-.4H8.4Zm-3.253 17.13c.125.229.186.467.186.717-.006.539-.207.974-.598 1.288-.383.32-.873.483-1.462.488-.446 0-.852-.137-1.224-.402-.324-.23-.78-1.014-.708-1.18.052-.118.112-.152.253-.152h.808c.136 0 .204.045.254.14.072.138.165.26.25.324.099.076.236.116.42.116a.717.717 0 0 0 .49-.17c.124-.098.188-.239.192-.429-.004-.203-.069-.35-.194-.45-.13-.104-.296-.156-.508-.156h-.114a.368.368 0 0 1-.375-.36v-.35c0-.2.168-.36.375-.36h.048c.238 0 .41-.052.53-.153a.439.439 0 0 0 .168-.36.488.488 0 0 0-.176-.38.74.74 0 0 0-.473-.154.648.648 0 0 0-.372.114.722.722 0 0 0-.236.32l-.005.016a.685.685 0 0 1-.022.045c-.046.077-.126.124-.237.124h-.784c-.179 0-.261-.115-.24-.24.075-.431.282-.83.592-1.085a1.97 1.97 0 0 1 1.273-.448c.607.005 1.1.174 1.468.51.35.323.531.712.537 1.159 0 .225-.047.442-.146.66a1.283 1.283 0 0 1-.336.395c.156.122.278.26.366.414Zm3.253-.463a.4.4 0 0 0-.4.4v1.2c0 .22.18.4.4.4h13.867a.4.4 0 0 0 .4-.4v-1.2a.4.4 0 0 0-.4-.4H8.4Z"
          fill="currentColor"></path>
      </svg>
    </IconContainer>
  )
}
export const BulletedList = (props: JSX.IntrinsicElements['button']) => {
  return (
    <IconContainer {...props}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-icon="DisordeListOutlined">
        <path
          d="M1.734 2.667a.4.4 0 0 0-.4.4v1.866a.4.4 0 0 0 .4.4H3.6a.4.4 0 0 0 .4-.4V3.067a.4.4 0 0 0-.4-.4H1.733Zm6.666 8a.4.4 0 0 0-.4.4v1.2c0 .22.18.4.4.4h13.867a.4.4 0 0 0 .4-.4v-1.2a.4.4 0 0 0-.4-.4H8.4Zm-7.067.4a.4.4 0 0 1 .4-.4H3.6a.4.4 0 0 1 .4.4v1.866a.4.4 0 0 1-.4.4H1.733a.4.4 0 0 1-.4-.4v-1.867Zm7.067-8.4a.4.4 0 0 0-.4.4v1.2c0 .22.18.4.4.4h13.867a.4.4 0 0 0 .4-.4v-1.2a.4.4 0 0 0-.4-.4H8.4Zm-7.067 16.4a.4.4 0 0 1 .4-.4H3.6a.4.4 0 0 1 .4.4v1.866a.4.4 0 0 1-.4.4H1.733a.4.4 0 0 1-.4-.4v-1.866Zm7.067.266a.4.4 0 0 0-.4.4v1.2c0 .221.18.4.4.4h13.867a.4.4 0 0 0 .4-.4v-1.2a.4.4 0 0 0-.4-.4H8.4Z"
          fill="currentColor"></path>
      </svg>
    </IconContainer>
  )
}
export const MarkDown = (props: JSX.IntrinsicElements['button']) => {
  return (
    <IconContainer {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16">
        <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
        <path d="M9.146 8.146a.5.5 0 0 1 .708 0L11.5 9.793l1.646-1.647a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 0-.708z" />
        <path d="M11.5 5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5z" />
        <path d="M3.56 11V7.01h.056l1.428 3.239h.774l1.42-3.24h.056V11h1.073V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H2.5V11h1.06z" />
      </svg>
    </IconContainer>
  )
}
export const CheckList = (props: JSX.IntrinsicElements['button']) => {
  return (
    <IconContainer {...props}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-icon="TodoOutlined">
        <path
          d="M17.207 10.207a1 1 0 0 0-1.414-1.414L11 13.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l5.5-5.5Z"
          fill="currentColor"></path>
        <path
          d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2 0v16h16V4H4Z"
          fill="currentColor"></path>
      </svg>
    </IconContainer>
  )
}
export const H1 = (props: JSX.IntrinsicElements['button']) => {
  return (
    <IconContainer {...props}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-icon="H1Outlined">
        <path
          d="M2 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0v-7h9v7a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0v7H3V4a1 1 0 0 0-1-1Zm15.604 9.91a.4.4 0 0 1-.585-.355c0-.533 0-.774.004-1.582a.4.4 0 0 1 .203-.347l2.769-1.568A.39.39 0 0 1 20.197 9h1.404c.234 0 .423.21.423.468V19.95c0 .593-.483 1.073-1.075 1.073a1.07 1.07 0 0 1-1.07-1.073v-8.228l-2.275 1.19Z"
          fill="currentColor"></path>
      </svg>
    </IconContainer>
  )
}
export const H2 = (props: JSX.IntrinsicElements['button']) => {
  return (
    <IconContainer {...props}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-icon="H2Outlined">
        <path
          d="M2 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0v-7h9v7a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0v7H3V4a1 1 0 0 0-1-1Zm20.993 16.872c0-.561-.455-1.015-1.017-1.015h-3.121l3.407-4.272a3.35 3.35 0 0 0 .731-2.126c-.01-.992-.347-1.816-1.005-2.464-.647-.651-1.492-.984-2.523-.995-.931.011-1.72.34-2.356.982-.37.386-.941 1.044-.941 1.602 0 .591.48 1.07 1.07 1.07.563 0 .769-.347.993-.726.06-.101.12-.204.19-.304a1.36 1.36 0 0 1 .186-.214c.262-.252.584-.376.982-.376.447.01.784.15 1.02.423.234.28.35.606.35.987 0 .146-.019.303-.057.471-.05.152-.156.341-.315.548l-4.402 5.506a.4.4 0 0 0-.087.25v1.022c0 .221.267.65.606.65h5.272c.562 0 1.017-.457 1.017-1.019Z"
          fill="currentColor"></path>
      </svg>
    </IconContainer>
  )
}
export const H3 = (props: JSX.IntrinsicElements['button']) => {
  return (
    <IconContainer {...props}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-icon="H3Outlined">
        <path
          d="M2 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0v-7h9v7a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0v7H3V4a1 1 0 0 0-1-1Zm21 14.296c0-.51-.108-.998-.324-1.461a2.923 2.923 0 0 0-.877-1.044c.377-.297.65-.63.816-1.001.17-.44.252-.886.252-1.348a3.48 3.48 0 0 0-.943-2.385C21.274 9.363 20.398 9.01 19.31 9a3.179 3.179 0 0 0-2.251.932c-.349.336-.848.879-.848 1.384a1 1 0 0 0 1 1c.482 0 .767-.352 1.043-.692l.09-.11c.057-.07.121-.132.192-.185.256-.2.53-.296.834-.296.431.01.779.144 1.049.405.267.267.406.61.415 1.04 0 .417-.133.75-.4 1.008-.335.335-.766.387-1.212.387a.958.958 0 1 0 0 1.917h.088c.452-.002.824-.003 1.205.353.29.277.442.674.452 1.201-.01.51-.16.894-.451 1.162-.296.296-.65.44-1.076.44-.4 0-.712-.107-.944-.316l-.008-.008a8.055 8.055 0 0 1-.213-.207c-.1-.099-.178-.207-.254-.31-.193-.264-.366-.5-.81-.5a1 1 0 0 0-1 1c0 .574.543 1.19.954 1.533.635.53 1.35.84 2.174.84 1.057-.01 1.93-.35 2.609-1.018.69-.651 1.04-1.545 1.052-2.664Z"
          fill="currentColor"></path>
      </svg>
    </IconContainer>
  )
}
export const BlockQuote = (props: JSX.IntrinsicElements['button']) => {
  return (
    <IconContainer {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16">
        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
      </svg>
    </IconContainer>
  )
}
export const UnderLine = (props: JSX.IntrinsicElements['button']) => {
  return (
    <IconContainer {...props}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-icon="UnderlineOutlined">
        <path
          d="M7.361 3.052a.99.99 0 0 0-.989-.994.998.998 0 0 0-.999.994v5.765c0 4.205 2.601 7.29 6.627 7.29s6.627-3.085 6.627-7.29V3.052a.996.996 0 0 0-.996-.994.992.992 0 0 0-.992.994v5.765c0 3.003-1.763 5.302-4.639 5.302-2.876 0-4.639-2.299-4.639-5.302V3.052ZM3.054 19.42a.988.988 0 0 0-.994.988 1 1 0 0 0 .994 1h17.892a1 1 0 0 0 .994-1.002.987.987 0 0 0-.994-.986H3.054Z"
          fill="currentColor"></path>
      </svg>
    </IconContainer>
  )
}
export const StrickThrough = (props: JSX.IntrinsicElements['button']) => {
  return (
    <IconContainer {...props}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-icon="HorizontalLineOutlined">
        <path
          d="M5.49 7.226A5.107 5.107 0 0 1 6.9 3.831C8.017 2.636 9.718 2 11.819 2c2.142 0 3.779.57 4.867 1.689.4.392.869.958 1.26 1.595.443.723-.191 1.53-1.04 1.53-.606 0-1.039-.447-1.326-.981a2.864 2.864 0 0 0-.362-.517c-.735-.93-1.909-1.419-3.386-1.419-2.404 0-4.154 1.395-4.2 3.393-.02.846.337 1.58.995 2.043h-2.75c-.271-.621-.403-1.332-.385-2.107Zm8.906 6.024H4.038c-.518 0-.938-.38-.938-.897 0-.518.42-.978.938-.978h16.125c.518 0 .937.437.937.954 0 .518-.42.921-.937.921h-2.455c.542.806.96 1.954.934 3.055C18.563 19.82 15.87 22 11.572 22c-2.875 0-5.028-.964-6.13-2.745a6.884 6.884 0 0 1-.545-1.191c-.261-.72.318-1.432 1.084-1.432.574 0 1.034.416 1.24.952.17.445.4.794.733 1.142.805.858 2.104 1.305 3.766 1.305 2.845 0 4.696-1.39 4.747-3.61.024-1.072-.256-1.61-.897-2.42-.473-.598-1.174-.751-1.174-.751Z"
          fill="currentColor"></path>
      </svg>
    </IconContainer>
  )
}
export const CodeBlock = (props: JSX.IntrinsicElements['button']) => {
  return (
    <IconContainer {...props}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-icon="CodeOutlined">
        <path
          d="M13.31 1.082a1 1 0 0 0-1.115.87L9.758 21.805a1 1 0 0 0 1.985.243l2.437-19.85a1 1 0 0 0-.87-1.115ZM8.207 5.293a1 1 0 0 1 0 1.414L2.414 12.5l5.793 5.793a1 1 0 1 1-1.414 1.414l-6.5-6.5a1 1 0 0 1 0-1.414l6.5-6.5a1 1 0 0 1 1.414 0Zm7.586 0a1 1 0 0 0 0 1.414l5.793 5.793-5.793 5.793a1 1 0 0 0 1.414 1.414l6.5-6.5a1 1 0 0 0 0-1.414l-6.5-6.5a1 1 0 0 0-1.414 0Z"
          fill="currentColor"></path>
      </svg>
    </IconContainer>
  )
}
export const Link = (props: JSX.IntrinsicElements['button']) => {
  return (
    <IconContainer onMouseDown={props.onMouseDown}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-icon="LinkCopyOutlined">
        <path
          d="M12.97 8.502a5.273 5.273 0 0 1 2.062 8.184l-2.986 3.688a5.273 5.273 0 1 1-8.196-6.636l2.857-3.528.09.866a3.68 3.68 0 0 0 .59 1.646L5.49 15.066a3.164 3.164 0 0 0 4.917 3.982l2.986-3.688a3.164 3.164 0 0 0-1.848-5.096l1.425-1.76Zm-1.59 6.65a5.273 5.273 0 0 1-2.062-8.184l2.987-3.689A5.273 5.273 0 0 1 20.5 9.916l-2.856 3.527-.091-.866a3.675 3.675 0 0 0-.589-1.646l1.897-2.342a3.164 3.164 0 1 0-4.917-3.982l-2.987 3.688a3.164 3.164 0 0 0 1.849 5.096l-1.426 1.76Z"
          fill="currentColor"></path>
      </svg>
    </IconContainer>
  )
}
export const Copy = () => {
  return (
    <IconContainer>
      <svg
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2001"
        width="16"
        height="16">
        <path
          d="M394.666667 106.666667h448a74.666667 74.666667 0 0 1 74.666666 74.666666v448a74.666667 74.666667 0 0 1-74.666666 74.666667H394.666667a74.666667 74.666667 0 0 1-74.666667-74.666667V181.333333a74.666667 74.666667 0 0 1 74.666667-74.666666z m0 64a10.666667 10.666667 0 0 0-10.666667 10.666666v448a10.666667 10.666667 0 0 0 10.666667 10.666667h448a10.666667 10.666667 0 0 0 10.666666-10.666667V181.333333a10.666667 10.666667 0 0 0-10.666666-10.666666H394.666667z m245.333333 597.333333a32 32 0 0 1 64 0v74.666667a74.666667 74.666667 0 0 1-74.666667 74.666666H181.333333a74.666667 74.666667 0 0 1-74.666666-74.666666V394.666667a74.666667 74.666667 0 0 1 74.666666-74.666667h74.666667a32 32 0 0 1 0 64h-74.666667a10.666667 10.666667 0 0 0-10.666666 10.666667v448a10.666667 10.666667 0 0 0 10.666666 10.666666h448a10.666667 10.666667 0 0 0 10.666667-10.666666v-74.666667z"
          fill="currentColor"
          p-id="2002"></path>
      </svg>
    </IconContainer>
  )
}
function IconContainer(props: JSX.IntrinsicElements['button']) {
  return (
    <button
      {...props}
      onMouseDown={e => {
        e.preventDefault()
        props.onMouseDown?.(e)
      }}
      className={
        'slatepad-icon w-[22px] h-[22px] p-[1px] mx-[4px] flex justify-center items-center rounded hover:bg-slate-300 hover:cursor-pointer' +
        ' ' +
        (props.className || '')
      }>
      {props.children}
    </button>
  )
}

export function ArrowIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      {...props}
      width={12}
      height={12}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16">
      <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
    </svg>
  )
}
