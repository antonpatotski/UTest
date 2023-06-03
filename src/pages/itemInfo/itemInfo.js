import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { ROUTE_PATH } from "../../constants/routes";
import { useUserStore } from "../../store/users";
import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";

import './itemInfo.scss';

export const ItemInfo = () => {
  const { [ROUTE_PATH.itemInfo.param]: userId } = useParams();
  const users = useUserStore((state) => state.users);
  const user = useMemo(() => users.find(e => e.key === userId), [ userId, users ]);

  return (
    <Card
      className="item-info"
      style={{
        width: 300,
        marginTop: 16,
      }}
    >
      <Meta
        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />}
        title={user?.name}
        description={`Age: ${user.age}, Address: ${user?.address}`}
      />
    </Card>
  );
}