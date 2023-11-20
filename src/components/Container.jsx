const Container = ({
    children
}) => {
    return (
        <div className=" w-full grid gird-col-3  md:grid-flow-col mt-5 gap-5 ">
            {children}
        </div>
    )
}

export default Container