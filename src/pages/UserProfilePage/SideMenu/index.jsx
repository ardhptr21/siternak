import React from 'react'
import { staticConst } from '../../../static/staticConst'
import { useNavigate } from 'react-router'

const SideMenu = ({ userStatus }) => {
  const navigate = useNavigate()

  return (
    <div className="rounded-lg __montserat-text shadow border border-gray-200 bg-white py-5">
      <div
        className="flex items-center px-5 pb-5 border-b-8 border-gray-200 cursor-pointer"
        onClick={() => navigate(`${userStatus === 1 ? '/user-profile/bio' : '/user-profile/bio_seller'}`, { replace: true })}
      >
        <img
          src="/assets/Untitled designrandoongrokgfn354tygregghehwerergerg.png"
          alt="profile_pict"
          className="w-11 h-11 object-cover rounded-full"
        />
        <div>
          {userStatus === 1 ? (
            <div>
              <div className="font-semibold text-sm ml-2">
                {staticConst.profile_menu.user.name}
              </div>
              <div className="text-xs text-gray-500 ml-2">
                {staticConst.profile_menu.user.role_name}
              </div>
            </div>
          ) : (
            <div>
              <div className="font-semibold text-sm ml-2">
                {staticConst.profile_menu.seller.name}
              </div>
              <div className="text-xs text-gray-500 ml-2">
                {staticConst.profile_menu.seller.role_name}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-2">
        {userStatus === 1
          ? staticConst.profile_menu.user.user_menu.map((el, index) => (
              <div key={index}>
                <div className="text-sm font-semibold py-2 px-5">
                  <span>{el.menu.icon}</span>
                  {el.menu.title}
                </div>
                {el.menu.subMenu.map((elm, idx) => (
                  <div
                    className="text-sm py-1 hover:bg-gray-100 text-gray-600 cursor-pointer"
                    key={idx}
                  >
                    <div
                      className="px-7"
                      onClick={() => navigate(elm.path, { replace: true })}
                    >
                      {elm.name}
                    </div>
                  </div>
                ))}
              </div>
            ))
          : staticConst.profile_menu.seller.seller_menu.map((el, index) => (
              <div key={index}>
                <div className="text-sm font-semibold py-2 px-5 flex items-center">
                  <span className="mr-2">{el.menu.icon}</span>
                  <span>{el.menu.title}</span>
                </div>
                {el.menu.subMenu.map((elm, idx) => (
                  <div
                    className="text-sm py-1 hover:bg-gray-100 text-gray-600 cursor-pointer"
                    key={idx}
                  >
                    <div
                      className="px-7"
                      onClick={() => navigate(elm.path, { replace: true })}
                    >
                      {elm.name}
                    </div>
                  </div>
                ))}
              </div>
            ))}
      </div>
    </div>
  )
}

export default SideMenu
