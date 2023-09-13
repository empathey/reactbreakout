import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  useAnimatedGestureHandler,
  withRepeat,
  withSequence,
  BounceIn,
  FadeOut,
} from "react-native-reanimated";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";

const FPS = 60;
const DELTA = 1000 / FPS;

const BALL_WIDTH = 40;

const islandDimensions = { x: 175, y: 200, w: 69, h: 37 };
const islandDimensions2 = { x: 100, y: 200, w: 69, h: 37 };
const islandDimensions3 = { x: 25, y: 200, w: 69, h: 37 };
const islandDimensions4 = { x: 175, y: 257, w: 69, h: 37 };
const islandDimensions5 = { x: 100, y: 257, w: 69, h: 37 };
const islandDimensions6 = { x: 25, y: 257, w: 69, h: 37 };
const islandDimensions7 = { x: 250, y: 257, w: 69, h: 37 };
const islandDimensions8 = { x: 325, y: 257, w: 69, h: 37 };
const islandDimensions9 = { x: 250, y: 200, w: 69, h: 37 };
const islandDimensions10 = { x: 325, y: 200, w: 69, h: 37 };
const islandDimensions11 = { x: 25, y: 314, w: 69, h: 37 };
const islandDimensions12 = { x: 100, y: 314, w: 69, h: 37 };
const islandDimensions13 = { x: 175, y: 314, w: 69, h: 37 };
const islandDimensions14 = { x: 250, y: 314, w: 69, h: 37 };
const islandDimensions15 = { x: 325, y: 314, w: 69, h: 37 };

const normalizeVector = (vector) => {
  const magnitude = Math.sqrt(vector.x * vector.x + vector.y * vector.y);

  return {
    x: vector.x / magnitude,
    y: vector.y / magnitude,
  };
};

export default function Game() {
   
  const { height, width } = useWindowDimensions();
  const playerDimensions = {
    w: width / 2,
    h: 37,
  };
  const cforeground = "purple";
  const backround = "green";
  const bot = "blue";
  const [SPEED, setSpeed] = useState(15);
  const [score, setScore] = useState(0);
  const [game, setGame] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [isboxShown, setisboxShown] = useState(false);
  const [isboxShown2, setisboxShown2] = useState(false);
  const [isboxShown3, setisboxShown3] = useState(false);
  const [isboxShown4, setisboxShown4] = useState(false);
  const [isboxShown5, setisboxShown5] = useState(false);
  const [isboxShown6, setisboxShown6] = useState(false);
  const [isboxShown7, setisboxShown7] = useState(false);
  const [isboxShown8, setisboxShown8] = useState(false);
  const [isboxShown9, setisboxShown9] = useState(false);
  const [isboxShown10, setisboxShown10] = useState(false);
  const [isboxShown11, setisboxShown11] = useState(false);
  const [isboxShown12, setisboxShown12] = useState(false);
  const [isboxShown13, setisboxShown13] = useState(false);
  const [isboxShown14, setisboxShown14] = useState(false);
  const [isboxShown15, setisboxShown15] = useState(false);
 const[Opac, setOpac] = useState(1);
 const[Opac2, setOpac2] = useState(1);
 const[Opac3, setOpac3] = useState(1);
 const[Opac4, setOpac4] = useState(1);
 const[Opac5, setOpac5] = useState(1);
 const[Opac6, setOpac6] = useState(1);
 const[Opac7, setOpac7] = useState(1);
 const[Opac8, setOpac8] = useState(1);
 const[Opac9, setOpac9] = useState(1);
 const[Opac10, setOpac10] = useState(1);
 const[Opac11, setOpac11] = useState(1);
 const[Opac12, setOpac12] = useState(1);
 const[Opac13, setOpac13] = useState(1);
 const[Opac14, setOpac14] = useState(1);
 const[Opac15, setOpac15] = useState(1);
  const targetPositionX = useSharedValue(width / 2);
  const targetPositionY = useSharedValue(height / 2);
  const direction = useSharedValue(
    normalizeVector({ x: Math.random(), y: Math.random() })
  );
  const playerPos = useSharedValue({ x: width / 4, y: height - 100 });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver) {
        update();
      }
    }, DELTA);

    return () => clearInterval(interval);
  }, [gameOver]);

  const update = () => {
    let nextPos = getNextPos(direction.value);
    let newDirection = direction.value;

    // Wall Hit detection
    if (nextPos.y > height - BALL_WIDTH) {
      setGameOver(true);
    }
    if (nextPos.y < 0) {
      newDirection = { x: direction.value.x, y: -direction.value.y };
    }

    if (nextPos.x < 0 || nextPos.x > width - BALL_WIDTH) {
      newDirection = { x: -direction.value.x, y: direction.value.y };
    }

    // Island Hit detection
    
    if (
        Opac.value = 1 && nextPos.x < islandDimensions.x + islandDimensions.w &&
      nextPos.x + BALL_WIDTH > islandDimensions.x &&
      nextPos.y < islandDimensions.y + islandDimensions.h &&
      BALL_WIDTH + nextPos.y > islandDimensions.y
    ) {
      if (
        (Opac.value = 1 && targetPositionX.value) < islandDimensions.x ||
        (Opac.value = 1 && targetPositionX.value) > islandDimensions.x + islandDimensions.w
      ) {
        
        setisboxShown == true;
        setOpac(0);
        newDirection = { x: -direction.value.x, y: direction.value.y };
      } else {
      
        setisboxShown == true;
        setOpac(0);
        newDirection = { x: direction.value.x, y: -direction.value.y };
      }
      setScore((s) => s + 1);
      setSpeed((s) => s + 1);
      setisboxShown == true;
      setOpac(0);
    }

    // hit detect 2

    if (
        Opac2.value = 1 && nextPos.x < islandDimensions2.x + islandDimensions2.w &&
        nextPos.x + BALL_WIDTH > islandDimensions2.x &&
        nextPos.y < islandDimensions2.y + islandDimensions2.h &&
        BALL_WIDTH + nextPos.y > islandDimensions2.y
      ) {
        if (
          targetPositionX.value < islandDimensions2.x ||
          targetPositionX.value > islandDimensions2.x + islandDimensions2.w
        ) {
            

            setisboxShown2 == true;
            //setOpac(0);
          newDirection = { x: -direction.value.x, y: direction.value.y };
        } else {
            
            setisboxShown2 == true;
            ///setOpac(0);
          newDirection = { x: direction.value.x, y: -direction.value.y };
        }
        setScore((s) => s + 1);
        setSpeed((s) => s + 1);
        setisboxShown2 == true;
        setOpac2(0);
        
      }
    // 3
    if (
        Opac3.value = 1 && nextPos.x < islandDimensions3.x + islandDimensions3.w &&
      nextPos.x + BALL_WIDTH > islandDimensions3.x &&
      nextPos.y < islandDimensions3.y + islandDimensions3.h &&
      BALL_WIDTH + nextPos.y > islandDimensions3.y
    ) {
      if (
        (Opac3.value = 1 && targetPositionX.value) < islandDimensions3.x ||
        (Opac3.value = 1 && targetPositionX.value) > islandDimensions3.x + islandDimensions3.w
      ) {
        
        setisboxShown3 == true;
        setOpac3(0);
        newDirection = { x: -direction.value.x, y: direction.value.y };
      } else {
      
        setisboxShown3 == true;
        setOpac3(0);
        newDirection = { x: direction.value.x, y: -direction.value.y };
      }
      setScore((s) => s + 1);
      setSpeed((s) => s + 1);
      setisboxShown3 == true;
      setOpac3(0);
    }
    //4
    if (
        Opac4.value = 1 && nextPos.x < islandDimensions4.x + islandDimensions4.w &&
      nextPos.x + BALL_WIDTH > islandDimensions4.x &&
      nextPos.y < islandDimensions4.y + islandDimensions4.h &&
      BALL_WIDTH + nextPos.y > islandDimensions4.y
    ) {
      if (
        (Opac4.value = 1 && targetPositionX.value) < islandDimensions4.x ||
        (Opac4.value = 1 && targetPositionX.value) > islandDimensions4.x + islandDimensions4.w
      ) {
        
        setisboxShown4 == true;
        setOpac4(0);
        newDirection = { x: -direction.value.x, y: direction.value.y };
      } else {
      
        setisboxShown4 == true;
        setOpac4(0);
        newDirection = { x: direction.value.x, y: -direction.value.y };
      }
      setScore((s) => s + 1);
      setSpeed((s) => s + 1);
      setisboxShown4 == true;
      setOpac4(0);
    }
    //5
    if (
        Opac5.value = 1 && nextPos.x < islandDimensions5.x + islandDimensions5.w &&
      nextPos.x + BALL_WIDTH > islandDimensions5.x &&
      nextPos.y < islandDimensions5.y + islandDimensions5.h &&
      BALL_WIDTH + nextPos.y > islandDimensions5.y
    ) {
      if (
        (Opac5.value = 1 && targetPositionX.value) < islandDimensions5.x ||
        (Opac5.value = 1 && targetPositionX.value) > islandDimensions5.x + islandDimensions5.w
      ) {
        
        setisboxShown5 == true;
        setOpac5(0);
        newDirection = { x: -direction.value.x, y: direction.value.y };
      } else {
      
        setisboxShown5 == true;
        setOpac5(0);
        newDirection = { x: direction.value.x, y: -direction.value.y };
      }
      setScore((s) => s + 1);
      setSpeed((s) => s + 1);
      setisboxShown5 == true;
      setOpac5(0);
    }
    //6
    if (
        Opac6.value = 1 && nextPos.x < islandDimensions6.x + islandDimensions6.w &&
      nextPos.x + BALL_WIDTH > islandDimensions6.x &&
      nextPos.y < islandDimensions6.y + islandDimensions6.h &&
      BALL_WIDTH + nextPos.y > islandDimensions6.y
    ) {
      if (
        (Opac6.value = 1 && targetPositionX.value) < islandDimensions6.x ||
        (Opac6.value = 1 && targetPositionX.value) > islandDimensions6.x + islandDimensions6.w
      ) {
        
        setisboxShown6 == true;
        setOpac6(0);
        newDirection = { x: -direction.value.x, y: direction.value.y };
      } else {
      
        setisboxShown6 == true;
        setOpac6(0);
        newDirection = { x: direction.value.x, y: -direction.value.y };
      }
      setScore((s) => s + 1);
      setSpeed((s) => s + 1);
      setisboxShown6 == true;
      setOpac6(0);
    }
    //7
    if (
        Opac4.value = 1 && nextPos.x < islandDimensions7.x + islandDimensions7.w &&
      nextPos.x + BALL_WIDTH > islandDimensions7.x &&
      nextPos.y < islandDimensions7.y + islandDimensions7.h &&
      BALL_WIDTH + nextPos.y > islandDimensions7.y
    ) {
      if (
        (Opac7.value = 1 && targetPositionX.value) < islandDimensions7.x ||
        (Opac7.value = 1 && targetPositionX.value) > islandDimensions7.x + islandDimensions7.w
      ) {
        
        setisboxShown7 == true;
        setOpac7(0);
        newDirection = { x: -direction.value.x, y: direction.value.y };
      } else {
      
        setisboxShown7 == true;
        setOpac7(0);
        newDirection = { x: direction.value.x, y: -direction.value.y };
      }
      setScore((s) => s + 1);
      setSpeed((s) => s + 1);
      setisboxShown7 == true;
      setOpac7(0);
    }
    //8
    if (
        Opac8.value = 1 && nextPos.x < islandDimensions8.x + islandDimensions8.w &&
      nextPos.x + BALL_WIDTH > islandDimensions8.x &&
      nextPos.y < islandDimensions8.y + islandDimensions8.h &&
      BALL_WIDTH + nextPos.y > islandDimensions8.y
    ) {
      if (
        (Opac8.value = 1 && targetPositionX.value) < islandDimensions8.x ||
        (Opac8.value = 1 && targetPositionX.value) > islandDimensions8.x + islandDimensions8.w
      ) {
        
        setisboxShown8 == true;
        setOpac8(0);
        newDirection = { x: -direction.value.x, y: direction.value.y };
      } else {
      
        setisboxShown8 == true;
        setOpac8(0);
        newDirection = { x: direction.value.x, y: -direction.value.y };
      }
      setScore((s) => s + 1);
      setSpeed((s) => s + 1);
      setisboxShown8 == true;
      setOpac8(0);
    }
    //9
    if (
        Opac9.value = 1 && nextPos.x < islandDimensions9.x + islandDimensions9.w &&
      nextPos.x + BALL_WIDTH > islandDimensions9.x &&
      nextPos.y < islandDimensions9.y + islandDimensions9.h &&
      BALL_WIDTH + nextPos.y > islandDimensions9.y
    ) {
      if (
        (Opac9.value = 1 && targetPositionX.value) < islandDimensions9.x ||
        (Opac9.value = 1 && targetPositionX.value) > islandDimensions9.x + islandDimensions9.w
      ) {
        
        setisboxShown9 == true;
        setOpac9(0);
        newDirection = { x: -direction.value.x, y: direction.value.y };
      } else {
      
        setisboxShown9 == true;
        setOpac9(0);
        newDirection = { x: direction.value.x, y: -direction.value.y };
      }
      setScore((s) => s + 1);
      setSpeed((s) => s + 1);
      setisboxShown9 == true;
      setOpac9(0);
    }
    //10
    if (
        Opac10.value = 1 && nextPos.x < islandDimensions10.x + islandDimensions10.w &&
      nextPos.x + BALL_WIDTH > islandDimensions10.x &&
      nextPos.y < islandDimensions10.y + islandDimensions10.h &&
      BALL_WIDTH + nextPos.y > islandDimensions10.y
    ) {
      if (
        (Opac10.value = 1 && targetPositionX.value) < islandDimensions10.x ||
        (Opac10.value = 1 && targetPositionX.value) > islandDimensions10.x + islandDimensions10.w
      ) {
        
        setisboxShown10 == true;
        setOpac10(0);
        newDirection = { x: -direction.value.x, y: direction.value.y };
      } else {
      
        setisboxShown10 == true;
        setOpac10(0);
        newDirection = { x: direction.value.x, y: -direction.value.y };
      }
      setScore((s) => s + 1);
      setSpeed((s) => s + 1);
      setisboxShown10 == true;
      setOpac10(0);
    }
    //11
    if (
        Opac11.value = 1 && nextPos.x < islandDimensions11.x + islandDimensions11.w &&
      nextPos.x + BALL_WIDTH > islandDimensions11.x &&
      nextPos.y < islandDimensions11.y + islandDimensions11.h &&
      BALL_WIDTH + nextPos.y > islandDimensions11.y
    ) {
      if (
        (Opac11.value = 1 && targetPositionX.value) < islandDimensions11.x ||
        (Opac11.value = 1 && targetPositionX.value) > islandDimensions11.x + islandDimensions11.w
      ) {
        
        setisboxShown11 == true;
        setOpac11(0);
        newDirection = { x: -direction.value.x, y: direction.value.y };
      } else {
      
        setisboxShown11 == true;
        setOpac11(0);
        newDirection = { x: direction.value.x, y: -direction.value.y };
      }
      setScore((s) => s + 1);
      setSpeed((s) => s + 1);
      setisboxShown11 == true;
      setOpac11(0);
    }
    //12
    if (
        Opac12.value = 1 && nextPos.x < islandDimensions12.x + islandDimensions12.w &&
      nextPos.x + BALL_WIDTH > islandDimensions12.x &&
      nextPos.y < islandDimensions12.y + islandDimensions12.h &&
      BALL_WIDTH + nextPos.y > islandDimensions12.y
    ) {
      if (
        (Opac12.value = 1 && targetPositionX.value) < islandDimensions12.x ||
        (Opac12.value = 1 && targetPositionX.value) > islandDimensions12.x + islandDimensions12.w
      ) {
        
        setisboxShown12 == true;
        setOpac12(0);
        newDirection = { x: -direction.value.x, y: direction.value.y };
      } else {
      
        setisboxShown12 == true;
        setOpac12(0);
        newDirection = { x: direction.value.x, y: -direction.value.y };
      }
      setScore((s) => s + 1);
      setSpeed((s) => s + 1);
      setisboxShown12 == true;
      setOpac12(0);
    }
    //13
    if (
        Opac13.value = 1 && nextPos.x < islandDimensions13.x + islandDimensions13.w &&
      nextPos.x + BALL_WIDTH > islandDimensions13.x &&
      nextPos.y < islandDimensions13.y + islandDimensions13.h &&
      BALL_WIDTH + nextPos.y > islandDimensions13.y
    ) {
      if (
        (Opac13.value = 1 && targetPositionX.value) < islandDimensions13.x ||
        (Opac13.value = 1 && targetPositionX.value) > islandDimensions13.x + islandDimensions13.w
      ) {
        
        setisboxShown13 == true;
        setOpac13(0);
        newDirection = { x: -direction.value.x, y: direction.value.y };
      } else {
      
        setisboxShown13 == true;
        setOpac13(0);
        newDirection = { x: direction.value.x, y: -direction.value.y };
      }
      setScore((s) => s + 1);
      setSpeed((s) => s + 1);
      setisboxShown13 == true;
      setOpac13(0);
    }
    //14
    if (
        Opac14.value = 1 && nextPos.x < islandDimensions14.x + islandDimensions14.w &&
      nextPos.x + BALL_WIDTH > islandDimensions14.x &&
      nextPos.y < islandDimensions14.y + islandDimensions14.h &&
      BALL_WIDTH + nextPos.y > islandDimensions14.y
    ) {
      if (
        (Opac14.value = 1 && targetPositionX.value) < islandDimensions14.x ||
        (Opac14.value = 1 && targetPositionX.value) > islandDimensions14.x + islandDimensions14.w
      ) {
        
        setisboxShown14 == true;
        setOpac14(0);
        newDirection = { x: -direction.value.x, y: direction.value.y };
      } else {
      
        setisboxShown14 == true;
        setOpac14(0);
        newDirection = { x: direction.value.x, y: -direction.value.y };
      }
      setScore((s) => s + 1);
      setSpeed((s) => s + 1);
      setisboxShown14 == true;
      setOpac14(0);
    }
    //15
    if (
        Opac15.value = 1 && nextPos.x < islandDimensions15.x + islandDimensions15.w &&
      nextPos.x + BALL_WIDTH > islandDimensions15.x &&
      nextPos.y < islandDimensions15.y + islandDimensions15.h &&
      BALL_WIDTH + nextPos.y > islandDimensions15.y
    ) {
      if (
        (Opac15.value = 1 && targetPositionX.value) < islandDimensions15.x ||
        (Opac15.value = 1 && targetPositionX.value) > islandDimensions15.x + islandDimensions15.w
      ) {
        
        setisboxShown15 == true;
        setOpac15(0);
        newDirection = { x: -direction.value.x, y: direction.value.y };
      } else {
      
        setisboxShown15 == true;
        setOpac15(0);
        newDirection = { x: direction.value.x, y: -direction.value.y };
      }
      setScore((s) => s + 1);
      setSpeed((s) => s + 1);
      setisboxShown15 == true;
      setOpac15(0);
    }
    // Player Hit detection
    if (
      nextPos.x < playerPos.value.x + playerDimensions.w &&
      nextPos.x + BALL_WIDTH > playerPos.value.x &&
      nextPos.y < playerPos.value.y + playerDimensions.h &&
      BALL_WIDTH + nextPos.y > playerPos.value.y
    ) {
      if (
        targetPositionX.value < playerPos.value.x ||
        targetPositionX.value > playerPos.value.x + playerDimensions.w
      ) {
        newDirection = { x: -direction.value.x, y: direction.value.y };
      } else {
        newDirection = { x: direction.value.x, y: -direction.value.y };
      }
    }

    direction.value = newDirection;
    nextPos = getNextPos(newDirection);

    targetPositionX.value = withTiming(nextPos.x, {
      duration: DELTA,
      easing: Easing.linear,
    });
    targetPositionY.value = withTiming(nextPos.y, {
      duration: DELTA,
      easing: Easing.linear,
    });
  };

  const getNextPos = (direction) => {
    return {
      x: targetPositionX.value + direction.x * SPEED,
      y: targetPositionY.value + direction.y * SPEED,
    };
  };

  const restartGame = () => {
    targetPositionX.value = width / 2;
    targetPositionY.value = height / 2;
    setScore(0);
    setSpeed(15);
    setGameOver(false);
    setGame((s => s + 1));
    setOpac(1);
    setOpac2(1);
    setOpac3(1);
    setOpac4(1);
    setOpac5(1);
    setOpac6(1);
    setOpac7(1);
    setOpac8(1);
    setOpac9(1);
    setOpac10(1);
    setOpac11(1);
    setOpac12(1);
    setOpac13(1);
    setOpac14(1);
    setOpac15(1);

  };

  const ballAnimatedStyles = useAnimatedStyle(() => {
    return {
      top: targetPositionY.value,
      left: targetPositionX.value,
    };
  });

  const islandAnimatedStyles = useAnimatedStyle(
    () => ({
      width: withSequence(
        withTiming(islandDimensions.w * 1.3),
        withTiming(islandDimensions.w)
      ),
      height: withSequence(
        withTiming(islandDimensions.h * 1.3),
        withTiming(islandDimensions.h)
      ),
      opacity: withSequence(withTiming(0), withTiming(1)),
    }),
    [score]
  );
  const islandAnimatedStyles2 = useAnimatedStyle(
    () => ({
      width: withSequence(
        withTiming(islandDimensions2.w * 1.3),
        withTiming(islandDimensions2.w)
      ),
      height: withSequence(
        withTiming(islandDimensions2.h * 1.3),
        withTiming(islandDimensions2.h)
      ),
      opacity: withSequence(withTiming(0), withTiming(1)),
    }),
    [score]
  );
  const playerAnimatedStyles = useAnimatedStyle(() => ({
    left: playerPos.value.x,
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      playerPos.value = {
        ...playerPos.value,
        x: event.absoluteX - playerDimensions.w / 2,
      };
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.score}>{score}</Text>
      {gameOver && (
        <View style={styles.gameOverContainer}>
          <Text style={styles.gameOver}>Game over</Text>
          <Button title="Restart" onPress={restartGame} />
        </View>
      )}

      {!gameOver && <Animated.View style={[styles.ball, ballAnimatedStyles]} />}

      {/*BOX 1*/}
     {!isboxShown && <Animated.View
        entering={BounceIn}
        exiting={FadeOut}
        key={game}
        style={{
        opacity: Opac,
          position: "absolute",
          top: islandDimensions.y,
          left: islandDimensions.x,
          width: islandDimensions.w,
          height: islandDimensions.h,
          borderRadius: 20,
          backgroundColor: cforeground,
        }}
      />
    }
      {/*BOX 2*/}
      {!isboxShown2 && <Animated.View
        entering={BounceIn}
        exiting={FadeOut}
        key={game+1}
        style={{
            opacity: Opac2,
          position: "absolute",
          top: islandDimensions2.y,
          left: islandDimensions2.x,
          width: islandDimensions2.w,
          height: islandDimensions2.h,
          borderRadius: 20,
          backgroundColor: cforeground,
        }}
      /> }
       {/*BOX 3*/}
{!isboxShown3 && <Animated.View
        entering={BounceIn}
        exiting={FadeOut}
        key={game+2}
        style={{
            opacity: Opac3,
          position: "absolute",
          top: islandDimensions3.y,
          left: islandDimensions3.x,
          width: islandDimensions3.w,
          height: islandDimensions3.h,
          borderRadius: 20,
          backgroundColor: cforeground,
        }}
      /> }
       {/*BOX 4*/}
      {!isboxShown4 && <Animated.View
        entering={BounceIn}
        exiting={FadeOut}
        key={game+3}
        style={{
            opacity: Opac4,
          position: "absolute",
          top: islandDimensions4.y,
          left: islandDimensions4.x,
          width: islandDimensions4.w,
          height: islandDimensions4.h,
          borderRadius: 20,
          backgroundColor: backround,
        }}
      /> }
       {/*BOX 5*/}
      {!isboxShown5 && <Animated.View
        entering={BounceIn}
        exiting={FadeOut}
        key={game+4}
        style={{
            opacity: Opac5,
          position: "absolute",
          top: islandDimensions5.y,
          left: islandDimensions5.x,
          width: islandDimensions5.w,
          height: islandDimensions5.h,
          borderRadius: 20,
          backgroundColor: backround,
        }}
      /> }
       {/*BOX 6*/}
      {!isboxShown6 && <Animated.View
        entering={BounceIn}
        exiting={FadeOut}
        key={game+5}
        style={{
            opacity: Opac6,
          position: "absolute",
          top: islandDimensions6.y,
          left: islandDimensions6.x,
          width: islandDimensions6.w,
          height: islandDimensions6.h,
          borderRadius: 20,
          backgroundColor: backround,
        }}
      /> }
       {/*BOX 7*/}
       {!isboxShown7 && <Animated.View
        entering={BounceIn}
        exiting={FadeOut}
        key={game+6}
        style={{
            opacity: Opac7,
          position: "absolute",
          top: islandDimensions7.y,
          left: islandDimensions7.x,
          width: islandDimensions7.w,
          height: islandDimensions7.h,
          borderRadius: 20,
          backgroundColor: backround,
        }}
      /> }
       {/*BOX 8*/}
       {!isboxShown8 && <Animated.View
        entering={BounceIn}
        exiting={FadeOut}
        key={game+7}
        style={{
            opacity: Opac8,
          position: "absolute",
          top: islandDimensions8.y,
          left: islandDimensions8.x,
          width: islandDimensions8.w,
          height: islandDimensions8.h,
          borderRadius: 20,
          backgroundColor: backround,
        }}
      /> }
       {/*BOX 9*/}
       {!isboxShown9 && <Animated.View
        entering={BounceIn}
        exiting={FadeOut}
        key={game+8}
        style={{
            opacity: Opac9,
          position: "absolute",
          top: islandDimensions9.y,
          left: islandDimensions9.x,
          width: islandDimensions9.w,
          height: islandDimensions9.h,
          borderRadius: 20,
          backgroundColor: cforeground,
        }}
      /> }
       {/*BOX 10*/}
       {!isboxShown10 && <Animated.View
        entering={BounceIn}
        exiting={FadeOut}
        key={game+9}
        style={{
            opacity: Opac10,
          position: "absolute",
          top: islandDimensions10.y,
          left: islandDimensions10.x,
          width: islandDimensions10.w,
          height: islandDimensions10.h,
          borderRadius: 20,
          backgroundColor: cforeground,
        }}
      /> }
       {/*BOX 11*/}
       {!isboxShown11 && <Animated.View
        entering={BounceIn}
        exiting={FadeOut}
        key={game+10}
        style={{
            opacity: Opac11,
          position: "absolute",
          top: islandDimensions11.y,
          left: islandDimensions11.x,
          width: islandDimensions11.w,
          height: islandDimensions11.h,
          borderRadius: 20,
          backgroundColor: bot,
        }}
      /> }
       {/*BOX 12*/}
       {!isboxShown12 && <Animated.View
        entering={BounceIn}
        exiting={FadeOut}
        key={game+11}
        style={{
            opacity: Opac12,
          position: "absolute",
          top: islandDimensions12.y,
          left: islandDimensions12.x,
          width: islandDimensions12.w,
          height: islandDimensions12.h,
          borderRadius: 20,
          backgroundColor: bot,
        }}
      /> }
       {/*BOX 13*/}
       {!isboxShown13 && <Animated.View
        entering={BounceIn}
        exiting={FadeOut}
        key={game+12}
        style={{
            opacity: Opac13,
          position: "absolute",
          top: islandDimensions13.y,
          left: islandDimensions13.x,
          width: islandDimensions13.w,
          height: islandDimensions13.h,
          borderRadius: 20,
          backgroundColor: bot,
        }}
      /> }
       {/*BOX 14*/}
       {!isboxShown14 && <Animated.View
        entering={BounceIn}
        exiting={FadeOut}
        key={game+13}
        style={{
            opacity: Opac14,
          position: "absolute",
          top: islandDimensions14.y,
          left: islandDimensions14.x,
          width: islandDimensions14.w,
          height: islandDimensions14.h,
          borderRadius: 20,
          backgroundColor: bot,
        }}
      /> }
       {/*BOX 15*/}
       {!isboxShown15 && <Animated.View
        entering={BounceIn}
        exiting={FadeOut}
        key={game+14}
        style={{
            opacity: Opac15,
          position: "absolute",
          top: islandDimensions15.y,
          left: islandDimensions15.x,
          width: islandDimensions15.w,
          height: islandDimensions15.h,
          borderRadius: 20,
          backgroundColor: bot,
        }}
      /> }

      {/* Player */}
      <Animated.View
        style={[
          {
            top: playerPos.value.y,
            position: "absolute",
            width: playerDimensions.w,
            height: playerDimensions.h,
            borderRadius: 20,
            backgroundColor: "black",
          },
          playerAnimatedStyles,
        ]}
      />

      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={{
            width: "100%",
            height: 200,
            position: "absolute",
            bottom: 0,
          }}
        />
      </PanGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  ball: {
    backgroundColor: "red",
    width: BALL_WIDTH,
    aspectRatio: 1,
    borderRadius: 25,
    position: "absolute",
  },
  score: {
    fontSize: 50,
    fontWeight: "300",
    position: "absolute",
    top: 700,
    color: "lightgray",
  },
  gameOverContainer: {
    position: "absolute",
    top: 350,
  },
  gameOver: {
    fontSize: 50,
    fontWeight: "500",
    color: "red",
  },
});