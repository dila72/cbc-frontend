export default function AdminPage() {
    return(
        <div className="w-full h-full bg-accent">

            <div className="w-[300px] h-full bg-accent">
                
            </div>
            <div className="w-[calc(100%-300px)] h-full bg-primary">
                <Routes path="/">
                    <Route path="/" element={<h1>Admin Dashboard</h1>}/>
                    <Route path="/products" element={<h1>Manage Products</h1>}/>
                    <Route path="/users" element={<h1>Manage Users</h1>}/>
                </Routes>

            </div>

        </div>
    )
}