import { AlignSelf } from "./item-property-component/AlignSelf";
import { FlexItemExamples } from "./item-property-component/FlexItemExample";
import { FlexItemProperties } from "./item-property-component/FlexItemsProperty";

const ItemsPropertiesSection = () => {
  return (
    <main className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">
          Introduction to Flexbox Items Properties
        </h2>
        <div className="prose max-w-none">
          <p>
            {" "}
            Flexbox item properties define how individual elements inside a flex
            container behave, allowing developers to control their size, order,
            and alignment within the flex layout. By applying properties such as{" "}
            <code>flex-grow</code>, <code>flex-shrink</code>, and{" "}
            <code>flex-basis</code>, items can dynamically resize based on
            available space, ensuring flexible and responsive designs. The{" "}
            <code>order</code> property enables reordering without altering HTML
            structure, while <code>align-self</code> allows individual items to
            override the container’s alignment settings. These properties make
            Flexbox a powerful tool for creating adaptable and visually
            consistent layouts with minimal effort.{" "}
          </p>

          <FlexItemProperties />
          <AlignSelf />
          <FlexItemExamples />
        </div>
      </div>
    </main>
  );
};

export default ItemsPropertiesSection;
