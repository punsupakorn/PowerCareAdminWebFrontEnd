

function  EditOfficerScreen ()  {

  return (
    <div className="content-body">
      <div className="flex h-screen   bg-white">
        <div
          className="w-1/2 bg-cover h-screen"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1520243947988-b7b79f7873e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGJsYWNrJTIwZm9yZXN0fGVufDB8fDB8eWVsbG93&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60)",
          }}
        />
        <div className="md:w-1/2 max-w-lg mx-auto my-3 shadow-none">
          <div className="text-center p-0">
            <h1 className=" text-gray-800 text-3xl ">แก้ไขข้อมูลเจ้าหน้าที่</h1>
        
          </div>
          <form>
            <div className="mt-4">
              <input
                type="text"
                name="FirstName"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                placeholder="โปรดกรอกชื่อจริง"
                // onChange={handleFirstName}
                required
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                name="LastName"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                placeholder="โปรดกรอกนามสกุล"
                // onChange={handleLastName}
                required
              />
            </div>
            <div className="mt-3">
              <input
                type="tel"
                name="Phone"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                placeholder="โปรดกรอกหมายเลขโทรศัพท์"
                // onChange={handlePhone}
                required
              />
            </div>
            <div className="  mt-3">
              <select
                id="position"
                name="Position"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                // onClick={handlePosition}
              >
                <option disabled selected value>
                  {" "}
                  โปรดระบุตำแหน่งงาน
                </option>
                <option className="option" value="Doctor">
                  {" "}
                  หมอ{" "}
                </option>
                <option className="option" value="Admin">
                  เจ้าหน้าที่
                </option>
              </select>
            </div>
            <div className="mt-3">
              <input
                type="email"
                name="Email"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
                placeholder="โปรดกรอก อีเมลล์"
                // onChange={handleEmail}
                required
              />
            </div>
            <div className="mt-3">
              <input
                type="password"
                name="Password"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
                placeholder="โปรดกรอก รหัสผ่าน (ไม่ต่ำกว่า 6 ตัวอักษร)"
                // onChange={handlePassword}
                required
              />
            </div>
            <div className="mt-3">
              <input
                type="password"
                name="ConfirmPassword"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
                placeholder="ยืนยันรหัสผ่าน"
                // onChange={handleConfirmPassword}
                required
              />
            </div>
            <div className="mt-1 block p-3 text-sm text-xs text-gray-800">
              <input type="checkbox" className="inline-block border-0  " />
              <span display="inline" className>
                ยอมรับ
                <a className target="_blank" data-test="Link">
                  <span className="underline ">เงื่อนไข</span>{" "}
                </a>{" "}
              </span>
            </div>
            <div className="mt-2">
              <button
                // onClick={handleSubmit}
                type="submit"
                className="button-done py-3 text-white w-full h-14 rounded"
              >
                {" "}
                เพิ่มบุคคลากร
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditOfficerScreen;
