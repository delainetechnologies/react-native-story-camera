import {useCallback, useMemo, useState} from 'react';
import type {CameraDevice} from 'react-native-vision-camera';
import {useCameraDevices} from 'react-native-vision-camera';
export function usePreferredCameraDevice(): [
  CameraDevice | undefined,
  (device: CameraDevice) => void,
] {
  const [preferredDeviceId, setPreferredDeviceId] = useState(
    'camera.preferredDeviceId',
  );

  const set = useCallback(
    (device: CameraDevice) => {
      setPreferredDeviceId(device.id);
    },
    [setPreferredDeviceId],
  );

  const devices = useCameraDevices();
  const device = useMemo(
    () => devices.find(d => d.id === preferredDeviceId),
    [devices, preferredDeviceId],
  );

  return [device, set];
}
