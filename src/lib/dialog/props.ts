

type PositionType=[Number,String]

export default interface dialogProps{
  active: Boolean,
  width:PositionType,
  title: String,
  closeByMask: Boolean,
  onBeforeClose: Function<(isConfirm: boolean) => any>,
};
