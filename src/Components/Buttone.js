import { Button } from "native-base";
import React from "react";

function Buttone({ mt, bg, color, children, onPress, variant = "solid" }) {
  return (
    <Button
      w="full"
      h={55}
      mt={mt}
      rounded="full"
      variant={variant}
      bg={bg}
      _text={{
        color,
        fontWeight: "bold",
      }}
      _pressed={{
        bg,
      }}
      onPress={onPress}
    >
      {children}
    </Button>
  );
}

export default Buttone;
