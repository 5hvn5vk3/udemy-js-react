export const ColorfulMessage = ({color, children}) => { // 括弧の中で分割代入 {color, children} = props
    const contentStyleA = {
        color, // 省略記法
        fontSize: "18px",
    };
    return (
        <p style = {contentStyleA}>{children}</p>
    )
}