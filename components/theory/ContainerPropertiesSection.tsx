import { AlignContent } from "./container-property-component/AlignContent";
import { AlignItems } from "./container-property-component/AlignItems";
import { ContainerExamples } from "./container-property-component/ContainerExample";
import { FlexDirection } from "./container-property-component/FlexDirection";
import { FlexWrap } from "./container-property-component/FlexWrap";
import { GapProperty } from "./container-property-component/Gap";
import { JustifyContent } from "./container-property-component/JustifyContent";

const ContainerPropertiesSection = () => {
  return (
    <main className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">
          Introduction to Flexbox Container Properties
        </h2>
        <div className="prose max-w-none">
          <p>
            Flexbox container properties define how elements inside a flex
            container behave, shaping their layout, alignment, and distribution.
            By setting <code>display: flex</code> on a parent element, its
            children automatically become flex items, enabling powerful control
            over spacing and positioning. Key properties like{" "}
            <code>flex-direction</code>, <code>justify-content</code>, and{" "}
            <code>align-items</code> allow developers to arrange elements
            horizontally or vertically, center content effortlessly, and create
            responsive designs without relying on floats or manual positioning.
          </p>

          <FlexDirection />
          <JustifyContent />
          <AlignItems />
          <FlexWrap />
          <AlignContent />
          <GapProperty />
          <ContainerExamples />
        </div>
      </div>
    </main>
  );
};

export default ContainerPropertiesSection;
