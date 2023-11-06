import React from "react";
import "../App.css"
import { useNavigate } from "react-router-dom";
import { Menu} from "antd";
import { HomeFilled } from "@ant-design/icons";


const Header = () => {
  
  const items = [
    {
      label: <HomeFilled />,
      key: "",
    
    },
    {
      label: "registration",
      key: "registration",
    },
    
  ];

  const navigate=useNavigate()
 const onMenuClick=(item)=>{
console.log(item);
navigate(`/${item.key}`)
  }


  return (
    
      <div className="flex flex-col shadow-sm">
      
        <Menu
       
          theme="dark"
          onClick={onMenuClick}
          mode="horizontal"
          items={items}
        
        />
      </div>
    
  );
};

export default Header;
