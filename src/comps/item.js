import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const Item = ({ children, className }) => {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}
 
export default Item;