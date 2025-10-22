import React, { useState, useCallback } from 'react';
import ReactFlow, { Background, Handle, Position } from 'react-flow-renderer';
import { nodes, edges } from './data/arbre';
import Etape from './components/Etape';

// Custom Node avec animation simple
const CustomStepNode = ({ data }) => {
  return (
    <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-400 animate-pulse text-white font-bold">
      <Handle type="target" position={Position.Top} />
      {data.label}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

function App() {
  const [selectedStep, setSelectedStep] = useState(null);

  const nodeTypes = { customStep: CustomStepNode };

  const onNodeClick = useCallback((event, node) => {
    setSelectedStep(node);
  }, []);

  const goBack = () => setSelectedStep(null);

  return (
    <div className="h-screen w-screen bg-gray-100">
      {!selectedStep ? (
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodeClick={onNodeClick}
          fitView
        >
          <Background />
        </ReactFlow>
      ) : (
        <Etape instructions={selectedStep.data.instructions} onBack={goBack} />
      )}
    </div>
  );
}

export default App;

